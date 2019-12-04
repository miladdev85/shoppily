import React, { Component } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { validateMail } from "./Utils/Functions";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: {
      email: ""
    }
  };

  onChange = e => {
    let errorMessage = "";
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "email") {
      errorMessage = validateMail.test(value) ? "" : "Vänligen ange en giltig e-postadress";
    }

    this.setState({
      [name]: value,
      errorMessage: { ...this.state.errorMessage, [name]: errorMessage }
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { email, password, errorMessage } = this.state;
    const isEnabled = email.length > 0 && password.length > 0 && errorMessage.email < 1;
    return (
      <div>
        <h2>Jag har redan ett konto</h2>
        <span>Logga in med din e-post och lösenord</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            onChange={this.onChange}
            value={email}
            required={true}
            label="email"
            type="email"
            name="email"
            placeholder="Ange din e-post"
          >
            {errorMessage.email && <p>{errorMessage.email}</p>}
          </FormInput>
          <FormInput
            onChange={this.onChange}
            value={password}
            required={true}
            label="password"
            type="password"
            name="password"
            placeholder="Ange ditt lösenord"
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CustomButton disabled={!isEnabled} styling="blackButton" type="submit">
              LOGGA IN
            </CustomButton>
            <Link to="/aterstall">
              <CustomButton styling="pinkButton">GLÖMT LÖSENORD</CustomButton>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
