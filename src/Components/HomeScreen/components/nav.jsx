import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

/**
 * @author
 * @function NavBar
 **/

const NavBar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__log"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
          alt="logo2"
        />
      </div>
    </div>
  );
};

export default NavBar;
