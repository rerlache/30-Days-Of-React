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
  return props.logos.map((logo) => (
    <img key={logo} alt={logo} src={logo} className="logomargin" />
  ));
};
const Header = (props) => (
  <header>
    <div className="header-wrapper">
      <center>
        <h3>{props.headline}</h3>
        <div>
          <LogosFormatted logos={logos} />
        </div>
      </center>
    </div>
  </header>
);
const subHeader = "Subscribe";
const subDescription = "Sign up with your email to receive news and updates";

const CustomButton = (props) => (
  <button className={props.design}>{props.text}</button>
);
const CustomInput = (props) => (
  <input
    id={props.id}
    className={props.design}
    placeholder={props.placeholder}
  />
);

const SubscribeCard = (props) => (
  <div className="subscribecardstyle">
    <h1 className="subheaderstyle">{props.welcome}</h1>
    <p className="subdescriptionstyle">{props.desc}</p>
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
  let colorStr = "#" + props.colorCode;
  let divs = [];
  for (let index = 0; index < Number(props.amount); index++) {
    const hexColorCode = hexaColor()
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
};

const person = {
  firstName: "Robin",
  lastName: "Erlacher",
  jobTitle: "Junior Developer",
  skills: [
    { category: "Frontend", name: "HTML", level: 9 },
    { category: "Frontend", name: "CSS", level: 7 },
    { category: "Fullstack", name: "C#", level: 9.5 },
    { category: "Frontend", name: "react", level: 3 },
    { category: "Backend", name: "DevOps", level: 8 },
    { category: "Backend", name: "powershell", level: 8 },
    { category: "Fullstack", name: "power platform", level: 9.5 },
    { category: "Frontend", name: "javascript", level: 2 },
    { category: "General", name: "english", level: 10 },
    { category: "General", name: "german", level: 10 },
  ],
  joined: "01.12.2022",
  photo: userPhoto,
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
const Skill = ({ skill: { name, level } }) => {
  return (
    <div className="userSkillstyle">
      {name}: {level}
    </div>
  );
};
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => (
    <Skill skill={skill} key={skill.name} />
  ));
  console.log({ skillsList });
  return <div>{skillsList}</div>;
};

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
      <Skills skills={props.person.skills} />
    </div>
    <div className="userJoinedstyle">Joined on {props.person.joined}</div>
  </div>
);

const numberGeneratorNumbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
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
const NumberDivGen = (props) => {
  return (
    <div
      className="numberBoxStyle"
      style={{ backgroundColor: NumberColor(props.number) }}
    >
      {props.number}
    </div>
  );
};

const NumberGenerator = (props) => {
  let colors = [];
  props.numbers.forEach((number) => {
    colors.push(<NumberDivGen number={number} key={number} />);
  });
  console.log({ colors });
  return <div className="flex-container">{colors}</div>;
};

const App = () => (
  <div className="app">
    <h2>Frontend Technologies</h2>
    <Header headline="Front End Technologies" />
    <hr />
    <h2>Subscribe Card</h2>
    <SubscribeCard welcome={subHeader} desc={subDescription} />
    <hr />
    <h2>Hexadecimal Colors</h2>
    <HexaColor colorCode="4e417e" amount="17" />
    <hr />
    <h2>Person Card</h2>
    <UserCard person={person} />
    <hr />
    <h2>Even/Odd/Prime Numbers</h2>
    <NumberGenerator numbers={numberGeneratorNumbers} />
    <hr />
  </div>
);

root.render(<App />);
