import React, { Component } from "react";
import CustomInput from "./CustomInput";

const initialState = {
  inputs: {
    fullName: {
      value: "",
      isValid: false,
      errorMessage: ""
    },
    email: {
      value: "",
      isValid: false,
      errorMessage: ""
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: ""
    }
  },
  formValid: false
};

const validateMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class Form extends Component {
  state = initialState;
  name = null;
  mail = null;
  password = null;

  componentDidMount() {
    if (this.props.focus) {
      this[this.props.focus].focus();
    }
  }

  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errorMessage = "";
    let isValid = false;

    switch (name) {
      case "fullName":
        errorMessage = value.length < 3 ? "Name must be atleast 3 characters long" : "";
        break;
      case "email":
        errorMessage = validateMail.test(value) ? "" : "Mail is not valid";
        break;
      case "password":
        errorMessage = value.length < 8 ? "Password must be atleast 8 characters long" : "";
        break;
      default:
        break;
    }

    if (!errorMessage) isValid = true;

    let formValid = true;

    for (let inputName in this.state.inputs) {
      if (!this.state.inputs[inputName].isValid && formValid) {
        formValid = false;
      }
    }

    this.setState({
      inputs: { ...this.state.inputs, ...{ [name]: { value: value, errorMessage, isValid } } },
      formValid
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputs);
  };

  render() {
    const {
      formValid,
      inputs: { fullName, email, password }
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <CustomInput
          title="Name"
          label="fullName"
          name="fullName"
          onChange={this.onChange}
          value={fullName.value}
          inputRef={name => (this.name = name)}
          placeholder="Enter your name"
        />
        {!fullName.isValid && <p>{fullName.errorMessage}</p>}
        <CustomInput
          title="Mail"
          label="email"
          name="email"
          onChange={this.onChange}
          value={email.value}
          inputRef={mail => (this.mail = mail)}
          placeholder="Enter your email"
        />
        {!email.isValid && <p>{email.errorMessage}</p>}
        <CustomInput
          title="Password"
          label="password"
          name="password"
          onChange={this.onChange}
          value={password.value}
          inputRef={password => (this.password = password)}
          placeholder="Choose a secure password"
        />
        {!password.isValid && <p>{password.errorMessage}</p>}
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
