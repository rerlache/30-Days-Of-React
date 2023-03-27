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
const LogosFormatted = (props) => {
  return props.logos.map((logo) => <img key={logo} alt={logo} src={logo} className="logomargin" />
)};
const Header = (props) => (
  <header>
    <div className="header-wrapper">
      <center>
        <h3>{props.headline}</h3>
        <div><LogosFormatted logos={logos} /></div>
      </center>
    </div>
  </header>
);
const subHeader = "Subscribe";
const subDescription = "Sign up with your email to receive news and updates";

const CustomButton = (props) => <button className={props.design}>{props.text}</button>;
const CustomInput = (props) => <input id={props.id} className={props.design} placeholder={props.placeholder} />

const SubscribeCard = (props) => (
  <div className="subscribecardstyle">
    <h1 className="subheaderstyle">{props.welcome}</h1>
    <p className="subdescriptionstyle">{props.desc}</p>
    <div>
      <CustomInput id="firstNameInput" design="subinputstyle" placeholder="First name" />
      <CustomInput id="lastNameInput" design="subinputstyle" placeholder="Last name" />
      <CustomInput id="emailInput" design="subinputstyle" placeholder="Email" />
    </div>
    <CustomButton design="subbuttonstyle" text={subHeader} />
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

const HexaColor = (props) => {
  let colorStr = "#" + props.colorCode
  let divs = []
  for (let index = 0; index < Number(props.amount); index++) {
    divs.push(<div style={{ backgroundColor: hexaColor() }} className="colorCardstyle">{hexaColor()}</div>)
  }
  return (
  <div className="flex-container">
    <div style={{ backgroundColor: colorStr}} className="colorCardstyle">{colorStr}</div>
    {divs}
  </div>)
};

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

const SkillsFormatted = (props) =>
  props.skills.map((skill) => <div className="userSkillstyle">{skill}</div>);

const UserCard = (props) => (
  <div className="userContainer">
    <img
      src={props.person.photo}
      alt={props.person.getFullName()}
      className="userPicturestyle"
    />
    <h1 className="userNamestyle">{props.person.getFullName()}</h1>
    <p className="userTitlestyle">{props.person.jobTitle}</p>
    <h3 className="userSkillsheaderstyle">skills</h3>
    <div className="flex-container">
      <SkillsFormatted skills={props.person.skills} />
    </div>
    <div className="userJoinedstyle">Joined on {props.person.joined}</div>
  </div>
);

const App = () => (
  <div className="app">
    <Header headline="Front End Technologies" />
    <SubscribeCard welcome={subHeader} desc={subDescription} />
    <HexaColor colorCode="4e417e" amount='17' />
    <UserCard person={person} />
  </div>
);

root.render(<App />);
