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
const header = (
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

const subscribeCard = (
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
    <button className="subbuttonstyle">{subHeader}</button>
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

const userCard = (
  <div className="userContainer">
    <img src={person.photo} alt={person.getFullName()} className="userPicturestyle" />
    <h1 className="userNamestyle">{person.getFullName().toUpperCase()}</h1>
    <p className="userTitlestyle">{person.jobTitle}</p>
    <h3>SKILLS</h3>
    <p>{person.skills.join(", ")}</p>
    <p>Joined on {person.joined}</p>
  </div>
);

const app = (
  <div className="app">
    {header}
    {subscribeCard}
    {userCard}
  </div>
);

root.render(app);
