import React from "react";

const NameInput = ({ onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor="nameInput">Name</label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        className="form-control"
        id="nameInput"
        placeholder="Enter name"
      ></input>
    </div>
  );
};

export default NameInput;
