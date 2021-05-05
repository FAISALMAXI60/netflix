import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../config/firebase";

/**
 * @author
 * @function SplashScreen
 **/

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "CURRENT_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "USER_SESSION_ENEDE",
        });
      }
    });
    return unsubscribe;
  });

  return (
    <div style={{ width: "100%", height: "100vh", background: "#e50914" }}>
      SplashScreen
    </div>
  );
};

export default SplashScreen;
