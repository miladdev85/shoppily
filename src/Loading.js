import React from "react";
import styled from "styled-components";

const ballStyle = {
  backgroundColor: "rgb(175, 175, 175)",
  width: "5rem",
  height: "5rem"
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
`;

function Loading() {
  return (
    <Container>
      <div style={ballStyle} className="spinner-grow" role="status"></div>
      <div style={ballStyle} className="spinner-grow" role="status"></div>
      <div style={ballStyle} className="spinner-grow" role="status"></div>
      <div style={ballStyle} className="spinner-grow" role="status"></div>
    </Container>
  );
}

export default Loading;
