import React, { useState } from "react";
import "./login.css";
import SigninScreen from "./SignInScren";

/**
 * @author
 * @function LoginScreen
 **/

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          onClick={() => setSignIn(false)}
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScree__body">
        {signIn ? (
          <SigninScreen getemail={email} />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to creat or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
