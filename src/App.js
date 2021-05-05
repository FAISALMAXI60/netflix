import "./App.css";
import HomeScreen from "./Components/HomeScreen";
import { Switch, Route } from "react-router-dom";
import React from "react";
import LoginScreen from "./Components/Login";
import { useSelector } from "react-redux";
import SplashScreen from "./Components/SplashScreen";
import ProfileScreen from "./Components/ProfileScreen";

function App() {
  const userReducer = useSelector((state) => state.UserReducer);
  const { isAuthenticated, loader } = userReducer;

  return (
    <div className="app">
      {loader ? (
        <SplashScreen />
      ) : (
        <>
          {!isAuthenticated ? (
            <LoginScreen />
          ) : (
            <Switch>
              <Route exact path="/profile" component={ProfileScreen} />
              <Route exact path="/" component={HomeScreen} />
            </Switch>
          )}
        </>
      )}
    </div>
  );
}

export default App;
