import React, { Component, useState, setState } from "react";
import CustomButton from "./customs/Button";

//#region State
class StateTesting extends Component {
  // declaring state
  state = {
    image:
      "https://thumbs.dreamstime.com/b/zebra-pixel-image-vector-illustration-animal-cross-stitch-game-icon-zebra-pixel-image-vector-illustration-animal-228607859.jpg",
    count: 0,
  };
  // methods to change the state
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };
  addFive = () => {
    this.setState({ count: this.state.count + 5 });
  };
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  minusFive = () => {
    this.setState({ count: this.state.count - 5 });
  };
  changeAnimal = () => {
    let dogURL =
      "https://thumbs.dreamstime.com/b/zebra-pixel-image-vector-illustration-animal-cross-stitch-game-icon-zebra-pixel-image-vector-illustration-animal-228607859.jpg";
    let birdURL =
      "https://thumbs.dreamstime.com/z/pixel-papagei-vogel-bild-bit-papageienvogelbild-f%C3%BCr-spielressourcen-kreuzstich-muster-oder-hemddesign-vektor-222840450.jpg";
    let image = this.state.image === birdURL ? dogURL : birdURL;
    this.setState({ image });
  };
  render() {
    // accessing the state value
    const count = this.state.count;
    const changeBackground = this.props.changeBackground;
    const bgColor = this.props.bgColor;
    return (
      <div>
        <div className="flex-container">
          <CustomButton
            design="stateButtonStyle"
            text="+ 5"
            doThis={this.addFive}
          />
          <CustomButton
            design="stateButtonStyle"
            text="+ 1"
            doThis={this.addOne}
          />
          <CustomButton
            design="stateButtonStyle"
            text="- 5"
            doThis={this.minusFive}
          />
          <CustomButton
            design="stateButtonStyle"
            text="- 1"
            doThis={this.minusOne}
          />
          <CustomButton
            design="stateButtonStyle"
            text="Chg Pic"
            doThis={this.changeAnimal}
          />
          <CustomButton
            design="stateButtonStyle"
            text="Chg BG"
            doThis={changeBackground}
          />
        </div>
        <div className="flex-container">
          <h3>count: {count}</h3>
          <img src={this.state.image} alt="animal" width="50px" />
          <h3>color: {bgColor}</h3>
        </div>
      </div>
    );
  }
}
//#endregion

export default StateTesting