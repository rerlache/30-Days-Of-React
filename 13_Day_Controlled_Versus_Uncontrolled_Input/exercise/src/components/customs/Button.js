import React, { Component } from "react";

class CustomButton extends Component {
  render() {
    return (
      <button className={this.props.design} onClick={this.props.doThis}>
        {this.props.text}
      </button>
    );
  }
}

export default CustomButton;
