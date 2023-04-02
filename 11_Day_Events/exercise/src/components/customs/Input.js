import React, { Component } from "react";

class CustomInput extends Component {
  render() {
    return (
      <input
        id={this.props.id}
        className={this.props.design}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default CustomInput;
