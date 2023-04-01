import React, { Component } from "react";

//#region Hexadecimal color generator
const randomHexaColor = (props) => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};
class HexaColor extends Component {
  render() {
    let colorStr = "#" + this.props.colorCode;
    let divs = [];
    for (let index = 0; index < Number(this.props.amount); index++) {
      const hexColorCode = randomHexaColor();
      divs.push(
        <div
          key={hexColorCode}
          style={{ backgroundColor: hexColorCode }}
          className="colorCardstyle"
        >
          {hexColorCode}
        </div>
      );
    }
    return (
      <div className="flex-container">
        <div
          id={colorStr}
          style={{ backgroundColor: colorStr }}
          className="colorCardstyle"
        >
          {colorStr}
        </div>
        {divs}
      </div>
    );
  }
}
//#endregion Hexadecimal color generator

export default HexaColor;
