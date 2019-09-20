import React from "react";

const MailInput = ({ onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="mailInput">Mail</label>
      <input
        onChange={onChange}
        type="email"
        className="form-control"
        id="mailInput"
        placeholder="Enter your e-mail"
      ></input>
    </div>
  );
};

export default MailInput;
