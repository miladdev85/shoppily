import React from "react";

const CustomButton = ({ children, altColor, ...otherProps }) => {
  return (
    <button className={`${altColor ? "altButton" : "blackButton"} custom__button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
