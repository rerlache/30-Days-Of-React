import React, { Component } from "react";

//#region Odd/Even/Prime Numbers
function IsPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
function NumberColor(num) {
  let color = "";
  if (IsPrime(num)) {
    return "HSL(3, 82%, 60.8%)";
  }
  const result = num % 2;
  switch (result) {
    case 0:
      color = "#6ab280";
      break;
    case 1:
      color = "Gold";
      break;
    default:
      break;
  }
  return color;
}
class NumberDivGen extends Component {
  //  constructor(props) {
  //    super(props);
  //  }
  render() {
    return (
      <div
        className="numberBoxStyle"
        style={{ backgroundColor: NumberColor(this.props.number) }}
      >
        {this.props.number}
      </div>
    );
  }
}
const NumberGenerator = (props) => {
  let colors = [];
  props.numbers.forEach((number) => {
    colors.push(<NumberDivGen number={number} key={number} />);
  });
  console.log({ colors });
  return <div className="flex-container">{colors}</div>;
};
//#endregion

export default NumberGenerator;
