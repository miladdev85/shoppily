import React from "react";

const CustomButton = ({ children, altColor, ...otherProps }) => {
  return (
    <button className={`${altColor ? "altColor" : ""} custom__button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
