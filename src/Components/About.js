import React, { Fragment } from "react";
import posed from "react-pose";
import data from "../Utils/data";

// Styling of the accordion. Animation between states.
const Content = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

class About extends React.Component {
  state = { open: false };

  render() {
    const { open } = this.state;
    return (
      <div className="about">
        <h1 className="about__title">Frågor och svar om detta projekt</h1>
        {data.map(({ question, answer }, i) => (
          <Fragment key={i}>
            <h2
              className="about__question"
              onClick={() => this.setState({ open: open === i ? false : i })}
            >
              {open === i ? "- " : "+ "}
              {question}
            </h2>
            <Content className="about__content" pose={open === i ? "open" : "closed"}>
              <div className="about__answer">{answer}</div>
            </Content>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default About;
