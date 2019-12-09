import React from "react";

const CustomButton = ({ children, styling, ...otherProps }) => {
  return (
    <button className={`${styling} custom__button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
