import React from "react";

const FormInput = ({ children, ...otherProps }) => {
  return (
    <div className="form__group">
      <input {...otherProps} className="form__input"></input>
      {children}
    </div>
  );
};

export default FormInput;
