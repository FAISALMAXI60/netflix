import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";

/**
 * @author
 * @function SigninScreen
 **/

const SigninScreen = ({ getemail }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(getemail);
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: "CURRENT_USER",
          payload: user.user,
        });
      })
      .catch((err) => {
        alert(err.message);
        console.log("error in login", err);
      });
  };
  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user
          .updateProfile({
            // displayName: fullName,
            photoURL:
              "https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png",
          })
          .then((user) => {
            dispatch({
              type: "CURRENT_USER",
              payload: authUser.user,
            });
          })
          .catch((err) => {
            console.log("profile creating error", err);
          });
      })
      .catch((err) => {
        alert(err.message);
        console.log("here is the error===>", err);
      });
  };

  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={Login}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen__gray"> New to Netflix? </span>
          <span className="signInScreen__link" onClick={Register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SigninScreen;
