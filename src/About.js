import React, { Fragment } from "react";
import posed from "react-pose";
import data from "./Utils/data";

const Content = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

const titleStyle = {
  cursor: "pointer",
  padding: "5px 8px",
  borderBottom: "1px solid #9f0092"
};

class About extends React.Component {
  state = { open: false };

  render() {
    const { open } = this.state;
    return (
      <>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Frågor och svar om detta projekt
        </h1>
        {data.map(({ question, answer }, i) => (
          <Fragment key={i}>
            <h2 style={titleStyle} onClick={() => this.setState({ open: open === i ? false : i })}>
              {open === i ? "- " : "+ "}
              {question}
            </h2>
            <Content
              style={{ overflow: "hidden", fontSize: "2rem" }}
              pose={open === i ? "open" : "closed"}
            >
              <div style={{ padding: "10px 0px 10px 20px" }}>{answer}</div>
            </Content>
          </Fragment>
        ))}
      </>
    );
  }
}

export default About;
