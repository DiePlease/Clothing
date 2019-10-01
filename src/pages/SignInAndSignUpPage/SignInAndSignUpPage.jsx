import React from "react";
import "./SignInAndSignUpPage.style.scss";
import SignIn from "../../componets/sign-in/sign-in";
import SignUp from "../../componets/sign-up/sign-up";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
