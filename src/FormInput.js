import React from "react";

const FormInput = ({ children, ...otherProps }) => {
  return (
    <div className="form">
      <input {...otherProps} className="form__input"></input>
      {children}
    </div>
  );
};

export default FormInput;
