import React, { Component } from "react";
import NameInput from "./NameInput";
import MailInput from "./MailInput";
import PasswordInput from "./PasswordInput";

export class Form extends Component {
  state = {
    nameInput: "",
    mailInput: ""
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <NameInput onChange={this.onChange} />
        <MailInput onChange={this.onChange} />
        <PasswordInput onChange={this.onChange} />
      </div>
    );
  }
}

export default Form;
