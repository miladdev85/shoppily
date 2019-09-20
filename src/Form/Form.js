import React, { Component } from "react";
import NameInput from "./NameInput";
import MailInput from "./MailInput";
import PasswordInput from "./PasswordInput";

export class Form extends Component {
  state = {
    nameInput: "",
    mailInput: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value }, () => console.log(this.state));
  };

  render() {
    const { nameInput, mailInput, password } = this.state;
    return (
      <div>
        {/* These component could also take in props. Placeholder, Did this in 5 minutes. Just want to
        check if I have understood the question correctly. */}

        <NameInput onChange={this.onChange} value={nameInput} />
        <MailInput onChange={this.onChange} value={mailInput} />
        <PasswordInput onChange={this.onChange} value={password} />
      </div>
    );
  }
}

export default Form;
