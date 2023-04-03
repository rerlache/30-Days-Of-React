import React from "react";
import htmlLogo from "../assets/images/html.svg";
import cssLogo from "../assets/images/css.svg";
import jsLogo from "../assets/images/javascript.svg";
import reactLogo from "../assets/images/react.svg";

const logos = [htmlLogo, cssLogo, jsLogo, reactLogo];
class LogosFormatted extends React.Component {
  // this is how the constructor is build
  //  constructor(props) {
  //    the code here will run at first!
  //  }
  render() {
    return this.props.logos.map((logo) => (
      <img key={logo} alt={logo} src={logo} className="logomargin" />
    ));
  }
}
class Header extends React.Component {
  //  constructor(props) {
  //    super(props);
  //  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <center>
            <h3>{this.props.headline}</h3>
            <div>
              <LogosFormatted logos={logos} />
            </div>
          </center>
        </div>
      </header>
    );
  }
}

export default Header