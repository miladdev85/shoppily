import React from "react";
import SignIn from "./SignIn";
import NewUser from "./NewUser";

const SignInPage = () => {
  return (
    <div className="pb-4">
      <h3 style={{ marginTop: "20px", textAlign: "center" }}>
        Only for demonstration purpose. No sign in functionality.
      </h3>
      <div className="row" style={{ marginTop: "60px" }}>
        <div className="col-12 col-md-6 offset-lg-1 col-lg-4" style={{ marginBottom: "40px" }}>
          <SignIn />
        </div>
        <div className="col-12 col-md-6 offset-lg-2 col-lg-4">
          <NewUser />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
