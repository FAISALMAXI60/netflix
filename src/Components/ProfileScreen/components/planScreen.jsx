import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import "./planScreen.css";
import { loadStripe } from "@stripe/stripe-js";

/**
 * @author
 * @function PlanScreen
 **/

const PlanScreen = ({ uid }) => {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);

  // check subscription
  useEffect(() => {
    db.collection("customers")
      .doc(uid)
      .collection("subscriptions")
      .get()
      .then((query) => {
        query.forEach((items) => {
          setSubscription({
            role: items.data().role,
            current_period_end: items.data().current_period_end.seconds,
            current_period_start: items.data().current_period_start.seconds,
          });
        });
      });
  }, [uid]);

  //to get products from firebase
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        let emptyProduct = {};
        querySnapshot.forEach(async (item) => {
          emptyProduct[item.id] = item.data();
          const priceSnap = await item.ref.collection("prices").get();
          priceSnap.docs.forEach((i) => {
            emptyProduct[item.id].prices = {
              priceID: i.id,
              priceData: i.data(),
            };
          });
        });
        setProducts(emptyProduct);
      });
  }, []);

  //to checkout the subscriptio to pay
  const loadCheckOut = async (priceID) => {
    const docRef = await db
      .collection("customers")
      .doc(uid)
      .collection("checkout_sessions")
      .add({
        price: priceID,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(error.message);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51IlIk6Ic7OrwYAE4sLSrO1W3r4ilmhNYJQcuxZuYfQLyCW3ScTPL8qEU27vFkrgPkWrOm9BoR6FnoQARoFYOx5IZ00rgMYNeY9"
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="planScreen">
      {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([producdId, productData]) => {
        const val = subscription?.role.concat(" ", "plan");

        const isCurrentPackage = productData.name?.toLowerCase().includes(val);

        return (
          <div
            className={`${
              isCurrentPackage && "planScreen__disabled"
            } planScreen__plan`}
            key={producdId}
          >
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h5>{productData.description}</h5>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckOut(productData?.prices?.priceID)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanScreen;
