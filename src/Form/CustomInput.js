import React from "react";

const CustomInput = ({ label, title, inputRef, onChange, value, type, name, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{title}</label>
      <input
        noValidate
        ref={inputRef}
        onChange={onChange}
        value={value}
        type={type}
        className="form-control"
        name={name}
        required
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default CustomInput;
