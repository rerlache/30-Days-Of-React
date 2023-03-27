import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import htmlLogo from "./images/html.svg";
import cssLogo from "./images/css.svg";
import jsLogo from "./images/javascript.svg";
import reactLogo from "./images/react.svg";
import userPhoto from "./images/robin.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

const logos = [htmlLogo, cssLogo, jsLogo, reactLogo];
const logosFormatted = logos.map((logo) => (
  <img key={logo} src={logo} className="logomargin" />
));
const Header = () => (
  <header>
    <div className="header-wrapper">
      <center>
        <h3>Front End Technologies</h3>
        <div>{logosFormatted}</div>
      </center>
    </div>
  </header>
);
const subHeader = "Subscribe";
const subDescription = "Sign up with your email to receive news and updates";

const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};
const Button = () => <button className="subbuttonstyle"> action </button>;

const SubscribeCard = () => (
  <div className="subscribecardstyle">
    <h1 className="subheaderstyle">{subHeader.toUpperCase()}</h1>
    <p className="subdescriptionstyle">{subDescription}</p>
    <div>
      <input
        id="firstNameInput"
        placeholder="First name"
        className="subinputstyle"
      />
      <input
        id="lastNameInput"
        placeholder="Last name"
        className="subinputstyle"
      />
      <input id="emailInput" placeholder="Email" className="subinputstyle" />
    </div>
    <Button />
  </div>
);

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => (
  <div>
    <div style={{ backgroundColor: hexaColor(), margin: "5px 15px", color: "white" }}>{hexaColor()}</div>
    <div style={{ backgroundColor: hexaColor(), margin: "5px 15px", color: "white" }}>{hexaColor()}</div>
    <div style={{ backgroundColor: hexaColor(), margin: "5px 15px", color: "white" }}>{hexaColor()}</div>
    <div style={{ backgroundColor: hexaColor(), margin: "5px 15px", color: "white" }}>{hexaColor()}</div>
  </div>
);

const person = {
  firstName: "Robin",
  lastName: "Erlacher",
  jobTitle: "Junior Developer",
  skills: [
    "HTML",
    "CSS",
    "C#",
    "react",
    "DevOps",
    "powershell",
    "power platform",
    "javascript",
    "english",
    "german",
  ],
  joined: "01.12.2022",
  photo: userPhoto,
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

const SkillsFormatted = () =>
  person.skills.map((skill) => <div className="userSkillstyle">{skill}</div>);

const UserCard = () => (
  <div className="userContainer">
    <img
      src={person.photo}
      alt={person.getFullName()}
      className="userPicturestyle"
    />
    <h1 className="userNamestyle">{person.getFullName()}</h1>
    <p className="userTitlestyle">{person.jobTitle}</p>
    <h3 className="userSkillsheaderstyle">skills</h3>
    <div className="userSkillscontainerstyle">
      <SkillsFormatted />
    </div>
    <br />
    <br />
    <div className="userJoinedstyle">Joined on {person.joined}</div>
  </div>
);

const App = () => (
  <div className="app">
    <Header />
    <SubscribeCard />
    <HexaColor />
    <UserCard />
  </div>
);

root.render(<App />);
