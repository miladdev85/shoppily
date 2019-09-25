import React from "react";
import SignIn from "./SignIn";
import NewUser from "./NewUser";

const SignInPage = () => {
  return (
    <div className="row" style={{ marginTop: "60px" }}>
      <div className="col col-md-4 offset-lg-1" style={{ marginBottom: "40px" }}>
        <SignIn />
      </div>
      <div className="col col-md-4 offset-lg-2">
        <NewUser />
      </div>
    </div>
  );
};

export default SignInPage;
