import React from "react";

const NameInput = ({ onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="nameInput">Name</label>
      <input
        onChange={onChange}
        type="text"
        className="form-control"
        id="nameInput"
        placeholder="Enter name"
      ></input>
    </div>
  );
};

export default NameInput;
