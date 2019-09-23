import React from "react";
import Form from "./Form/Form";
const Appi = () => {
  return (
    <div className="container">
      <Form focus="name" onSubmit={obj => console.log(obj)} />
    </div>
  );
};

export default Appi;
