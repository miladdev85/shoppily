import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const Error = ({ message }) => {
  return (
    <Container>
      <p style={{ fontSize: "40px" }}>{message}</p>
      <p style={{ fontSize: "30px" }}>Please try again or contact support</p>
    </Container>
  );
};

export default Error;
