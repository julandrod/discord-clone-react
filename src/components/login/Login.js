import React from "react";
import "./Login.css";
import discord from "../../images/Discord-logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src={discord} alt="" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
