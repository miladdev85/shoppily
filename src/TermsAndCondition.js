import React, { Component } from "react";
import Modal from "./Modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export class TermsAndCondition extends Component {
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>Open the modal</button>

        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          `Here's some content for the modal`
        </Modal>
      </div>
    );
  }
}

export default TermsAndCondition;
