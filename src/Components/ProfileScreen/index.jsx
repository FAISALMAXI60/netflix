import React from "react";
import NavBar from "../HomeScreen/components/nav";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../config/firebase";
import PlanScreen from "./components/planScreen";

/**
 * @author
 * @function ProfileScreen
 **/

const ProfileScreen = () => {
  const userReducer = useSelector((state) => state.UserReducer);
  const { currentUser } = userReducer;
  const dispatch = useDispatch();

  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            // className="nav__avatar"
            src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
            alt="logo2"
          />
          <div className="profileScreen__details">
            <h2>{currentUser.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen uid={currentUser.uid} />
              <button
                className="profileScreen_signout__button"
                onClick={() => {
                  auth.signOut().then(() =>
                    dispatch({
                      type: "LOGOUT",
                    })
                  );
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
