import React, { useState } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px auto;
  max-width: 520px;
  display: flex;
  flex-direction: column;
`;

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>Återställ lösenord</h1>
      <form onSubmit={onSubmit}>
        <FormInput
          onChange={onChange}
          value={email}
          required={true}
          label="email"
          type="email"
          name="email"
          placeholder="Ange din e-post"
        />
        <CustomButton type="submit" altColor={true}>
          BEGÄR ÅTERSTÄLLNING
        </CustomButton>
      </form>
    </Container>
  );
};

export default ResetPassword;
