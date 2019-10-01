import React, { Component } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { validateMail } from "./Utils/Functions";

export class SignIn extends Component {
  state = {
    inputs: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    formValid: false
  };

  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "fullName":
        errorMessage = value.length < 3 ? "Namnet måste innehålla minst 3 tecken" : "";
        break;
      case "email":
        errorMessage = validateMail.test(value) ? "" : "Vänligen ange en giltig e-postadress";
        break;
      case "password":
        errorMessage = value.length < 8 ? "Lösenordet måste innehålla minst 8 tecken" : "";
        break;
      case "confirmPassword":
        errorMessage = value !== this.state.inputs.password ? "Lösenordet matchar inte" : "";
        break;
      default:
        break;
    }

    this.setState(
      {
        inputs: { ...this.state.inputs, [name]: value },
        errors: { ...this.state.errors, [name]: errorMessage }
      },
      () => this.validateForm()
    );
  };

  validateForm = () => {
    let inputsValid = true;
    let noErrors = true;

    Object.values(this.state.inputs).forEach(val => val.length < 1 && (inputsValid = false));
    Object.values(this.state.errors).forEach(val => val.length > 0 && (noErrors = false));

    if (inputsValid && noErrors) {
      this.setState({ formValid: true }, () => console.log(this.state));
    } else {
      this.setState({ formValid: false });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password, fullName, confirmPassword, errors, formValid } = this.state;

    return (
      <div>
        <h2>Ny kund? Skapa ett konto</h2>
        <span>Du kommer sedan att logga in med din e-post och lösenord</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            onChange={this.onChange}
            value={fullName}
            required={true}
            label="fullName"
            type="text"
            name="fullName"
            placeholder="Ange ditt fullständiga namn"
          >
            {!formValid && <span style={{ marginTop: "0px" }}>{errors.fullName}</span>}
          </FormInput>
          <FormInput
            onChange={this.onChange}
            value={email}
            required={true}
            label="email"
            type="email"
            name="email"
            placeholder="Ange din e-post"
          >
            {!formValid && <p>{errors.email}</p>}
          </FormInput>
          <FormInput
            onChange={this.onChange}
            value={password}
            required={true}
            label="password"
            type="password"
            name="password"
            placeholder="Skapa ett lösenord"
          >
            {!formValid && <p>{errors.password}</p>}
          </FormInput>
          <FormInput
            onChange={this.onChange}
            value={confirmPassword}
            required={true}
            label="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Bekräfta lösenordet"
          >
            {!formValid && <p>{errors.confirmPassword}</p>}
          </FormInput>
          <CustomButton disabled={!formValid} type="submit">
            SKAPA KONTO
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;