import React from "react";

const PasswordInput = ({ onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        onChange={onChange}
        value={value}
        type="password"
        className="form-control"
        id="password"
        placeholder="Choose a secure password"
      ></input>
    </div>
  );
};

export default PasswordInput;
