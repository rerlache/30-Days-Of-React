import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import htmlLogo from "./images/html.svg";
import cssLogo from "./images/css.svg";
import jsLogo from "./images/javascript.svg";
import reactLogo from "./images/react.svg";
import userPhoto from "./images/robin.jpg";

//#region Header
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
//#endregion
//#region Subscribe
const subHeader = "Subscribe";
const subDescription = "Sign up with your email to receive news and updates";
class CustomButton extends React.Component {
  //  constructor(props) {
  //    super(props);
  //  }
  render() {
    return (
      <button className={this.props.design} onClick={this.props.doThis}>
        {this.props.text}
      </button>
    );
  }
}
class CustomInput extends React.Component {
  //  constructor(props) {
  //    super(props);
  //  }
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
class SubscribeCard extends React.Component {
  //  constructor(props) {
  //    super(props);
  //  }
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
        <CustomButton design="subbuttonstyle" text={subHeader} />
      </div>
    );
  }
}
//#endregion Subscribe
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
class HexaColor extends React.Component {
  //  constructor(props) {
  //    super(props);
  //  }
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
//#region UserCard
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
class UserCard extends React.Component {
  //  constructor(props) {
  //    super(props);
  //  }
  render() {
    return (
      <div className="userContainer">
        <img
          src={this.props.person.photo}
          alt={this.props.person.getFullName()}
          className="userPicturestyle"
        />
        <h1 className="userNamestyle">{this.props.person.getFullName()}</h1>
        <p className="userTitlestyle">{this.props.person.jobTitle}</p>
        <h3 className="userSkillsheaderstyle">skills</h3>
        <div className="flex-container">
          <Skills skills={this.props.person.skills} />
        </div>
        <div className="userJoinedstyle">
          Joined on {this.props.person.joined}
        </div>
      </div>
    );
  }
}
//#endregion
//#region Odd/Even/Prime Numbers
const numberGeneratorNumbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
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
class NumberDivGen extends React.Component {
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
//#region Population
const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "USA", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russia", population: 146599183 },
  { country: "Japan", population: 126960000 },
];
const Population = ({ populationData: { country, population } }) => {
  const barWidth = Math.round(population / 15000000);
  console.log({ barWidth });
  return (
    <tbody>
      <tr>
        <td className="popCountryStyle">{country}</td>
        <td>
          <div id="dataBar" style={{ width: barWidth }} />
        </td>
        <td className="popNumberStyle">
          {Number(population).toLocaleString()}
        </td>
      </tr>
    </tbody>
  );
};
const GetPopulationDivList = ({ pops }) => {
  const popList = pops.map((population) => (
    <Population populationData={population} key={population.country} />
  ));
  return <table className="centerTable">{popList}</table>;
};

class PopulationRendering extends React.Component {
  //  constructor(props) {
  //    super(props);
  //  }
  render() {
    return (
      <div>
        <h1 className="centerText">World Population</h1>
        <h3 className="centerText">Ten most populated countries</h3>
        <GetPopulationDivList pops={this.props.popData} />
      </div>
    );
  }
}
//#endregion

class StateTesting extends React.Component {
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
    const bgColor = this.props.bgColor
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

//#region RENDER MAGIC
const root = ReactDOM.createRoot(document.getElementById("root"));
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    theme: {
      backgroundColor: "smokewhite",
      color: "black",
    },
  };
  changeBackground = () => {
    let whiteBG = {backgroundColor: "smokewhite", color: "black"};
    let blackBG = {backgroundColor: "black", color: "smokewhite"};
    let bgColor = this.state.theme.backgroundColor == whiteBG.backgroundColor ? blackBG : whiteBG;
    console.log(this.state.theme == whiteBG);
    this.setState({ theme: { bgColor } });
  };
  render() {
    const bgColor = this.state.theme.backgroundColor
    console.log(this.state.theme.backgroundColor)
    return (
      <div className="app">
        <h2>Frontend Technologies</h2>
        <Header headline="Front End Technologies" />
        <hr />
        <h2>Subscribe Card</h2>
        <SubscribeCard welcome={subHeader} desc={subDescription} />
        <hr />
        <h2>Hexadecimal Colors</h2>
        <HexaColor colorCode="4e417e" amount="20" />
        <hr />
        <h2>Person Card</h2>
        <UserCard person={person} />
        <hr />
        <h2>Even/Odd/Prime Numbers</h2>
        <NumberGenerator numbers={numberGeneratorNumbers} />
        <hr />
        <h2>Population</h2>
        <PopulationRendering popData={tenHighestPopulation} />
        <hr />
        <h2>State Testing</h2>
        <StateTesting changeBackground={this.changeBackground} bgColor={bgColor} />
      </div>
    );
  }
}
root.render(<App />);
//#endregion
