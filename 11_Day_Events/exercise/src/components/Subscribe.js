import React, { Component } from "react";
import CustomButton from "./customs/Button";
import CustomInput from "./customs/Input";

//#region Subscribe
class SubscribeCard extends Component {
  render() {
    return (
      <div className="subscribecardstyle">
        <h1 className="subheaderstyle">{this.props.welcome}</h1>
        <p className="subdescriptionstyle">{this.props.desc}</p>
        <div>
          <CustomInput
            id="firstNameInput"
            design="subinputstyle"
            placeholder="First name"
          />
          <CustomInput
            id="lastNameInput"
            design="subinputstyle"
            placeholder="Last name"
          />
          <CustomInput
            id="emailInput"
            design="subinputstyle"
            placeholder="Email"
          />
        </div>
        <CustomButton design="subbuttonstyle" text={this.props.welcome} />
      </div>
    );
  }
}
//#endregion Subscribe

export default SubscribeCard
