import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import htmlLogo from "./images/html.svg";
import cssLogo from "./images/css.svg";
import jsLogo from "./images/javascript.svg";
import reactLogo from "./images/react.svg";
import userPhoto from "./images/robin.jpg";
import backgroundSpring from "./images/spring.jpg";
import backgroundSummer from "./images/summer.jpg";
import backgroundFall from "./images/fall.jpg";
import backgroundWinter from "./images/winter.jpg";
import morningBG from "./images/morning.jpg";
import afternoonBG from "./images/afternoon.jpg";
import eveningBG from "./images/evening.jpg";
import nightBG from "./images/night.jpg";
import loadingGif from "./images/loading.gif";

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
//#region State
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
//#region Country Selection
// Creates the table-row for a single country
const Country = ({
  countryData: { name, capital, language, population, currency, flaglink },
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{capital}</td>
      <td>{language}</td>
      <td>{Number(population).toLocaleString()}</td>
      <td>{currency}</td>
      <td>
        <img src={flaglink} alt={`Flag of ${name}`} height="100" width="150" />
      </td>
    </tr>
  );
};
// Array for all the countries
const countries = [
  {
    name: "Canada",
    capital: "Ottawa",
    language: "English, French",
    population: 37636329,
    currency: "Canadian dollar",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
  },
  {
    name: "United States",
    capital: "Washington D.C.",
    language: "English",
    population: 332639102,
    currency: "United States dollar",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
  },
  // Add other countries following the same structure
  {
    name: "Japan",
    capital: "Tokyo",
    language: "Japanese",
    population: 126010000,
    currency: "Japanese yen",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif",
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    language: "Spanish",
    population: 126014024,
    currency: "Mexican peso",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif",
  },
  {
    name: "Germany",
    capital: "Berlin",
    language: "German",
    population: 83240525,
    currency: "Euro",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif",
  },
  {
    name: "Brazil",
    capital: "Brasília",
    language: "Portuguese",
    population: 213876599,
    currency: "Brazilian real",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_br-flag.gif",
  },
  {
    name: "India",
    capital: "New Delhi",
    language: "Hindi, English",
    population: 1393248737,
    currency: "Indian rupee",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_in-flag.gif",
  },
  {
    name: "China",
    capital: "Beijing",
    language: "Mandarin",
    population: 1411778724,
    currency: "Renminbi",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_ch-flag.gif",
  },
  {
    name: "France",
    capital: "Paris",
    language: "French",
    population: 65480710,
    currency: "Euro",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif",
  },
  {
    name: "South Korea",
    capital: "Seoul",
    language: "Korean",
    population: 51269185,
    currency: "South Korean won",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_ks-flag.gif",
  },
  {
    name: "Spain",
    capital: "Madrid",
    language: "Spanish",
    population: 46754778,
    currency: "Euro",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif",
  },
  {
    name: "United Kingdom",
    capital: "London",
    language: "English",
    population: 67886011,
    currency: "Pound sterling",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
  },
  {
    name: "Italy",
    capital: "Rome",
    language: "Italian",
    population: 60026546,
    currency: "Euro",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_it-flag.gif",
  },
  {
    name: "Russia",
    capital: "Moscow",
    language: "Russian",
    population: 145934462,
    currency: "Russian ruble",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_rs-flag.gif",
  },
  {
    name: "Australia",
    capital: "Canberra",
    language: "English",
    population: 25550683,
    currency: "Australian dollar",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_as-flag.gif",
  },
  {
    name: "Nigeria",
    capital: "Abuja",
    language: "English",
    population: 206139589,
    currency: "Nigerian naira",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_ni-flag.gif",
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    language: "Spanish",
    population: 45267449,
    currency: "Argentine peso",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif",
  },
  {
    name: "Poland",
    capital: "Warsaw",
    language: "Polish",
    population: 37975841,
    currency: "Polish złoty",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif",
  },
  {
    name: "South Africa",
    capital: "Pretoria, Cape Town, Bloemfontein",
    language: "Afrikaans, English",
    population: 59436725,
    currency: "South African rand",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_sf-flag.gif",
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    language: "Spanish",
    population: 50882891,
    currency: "Colombian peso",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_co-flag.gif",
  },
  {
    name: "Austria",
    capital: "Vienna",
    language: "German, English",
    population: 8828910,
    currency: "Euro",
    flaglink: "https://www.worldometers.info/img/flags/small/tn_au-flag.gif",
  },
];
// Shows the table with all the countries from the array
const CountryTableReturn = ({ countrylist }) => {
  const countryList = countrylist.map((country) => (
    <Country countryData={country} key={country.name} />
  ));
  return (
    <table className="hidden">
      <thead>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Language</th>
          <th>Population</th>
          <th>Currency</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>{countryList}</tbody>
    </table>
  );
};
// Shows the box with the Button to switch to the next country
function CountriesList(props) {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  const handleNextCountry = () => {
    setCurrentCountryIndex(
      currentCountryIndex === props.countries.length - 1
        ? 0
        : currentCountryIndex + 1
    );
  };

  return (
    <div>
      <div className="countryBox">
        <center>
          <img
            src={props.countries[currentCountryIndex].flaglink}
            className="countryFlag"
            alt={props.countries[currentCountryIndex].name}
          />
          <br />
          <div className="countryName">
            {props.countries[currentCountryIndex].name}
          </div>
        </center>
        <div>
          <strong>Capital: </strong>
          {props.countries[currentCountryIndex].capital}
        </div>
        <div>
          <strong>Language: </strong>
          {props.countries[currentCountryIndex].language}
        </div>
        <div>
          <strong>Population: </strong>
          {Number(
            props.countries[currentCountryIndex].population
          ).toLocaleString()}
        </div>
        <div>
          <strong>Currency: </strong>
          {props.countries[currentCountryIndex].currency}
        </div>
      </div>
      <center>
        <CustomButton
          doThis={handleNextCountry}
          text="Next"
          design="subbuttonstyle"
        />
      </center>
    </div>
  );
}
//#endregion
//#region Conditional Rendering
const SeasonalBackground = (props) => {
  const [backgroundImg, setBackgroundImg] = useState("");

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;

    if (month >= 3 && month <= 5) {
      // March, April, May
      setBackgroundImg(backgroundSpring);
    } else if (month >= 6 && month <= 8) {
      // June, July, August
      setBackgroundImg(backgroundSummer);
    } else if (month >= 9 && month <= 11) {
      // September, October, November
      setBackgroundImg(backgroundFall);
    } else {
      // December, January, February
      setBackgroundImg(backgroundWinter);
    }
  }, []);

  return (
    <div
      style={{
        background: `url(${backgroundImg}) center center / cover no-repeat fixed`,
        height: "500px",
      }}
    >
      <h3>{props.content}</h3>
      {backgroundImg}
    </div>
  );
};
const TimedBackground = (props) => {
  const [backgroundImg, setBackgroundImg] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
      // morning (5am to 12pm)
      setBackgroundImg(morningBG);
    } else if (hour >= 12 && hour < 18) {
      // afternoon (12pm to 6pm)
      setBackgroundImg(afternoonBG);
    } else if (hour >= 18 && hour < 22) {
      // evening (6pm to 10pm)
      setBackgroundImg(eveningBG);
    } else {
      // night (10pm to 5am)
      setBackgroundImg(nightBG);
    }
  }, []);

  return (
    <div
      style={{
        background: `url(${backgroundImg}) center center / cover no-repeat fixed`,
        height: "500px",
        color: 'whitesmoke'
      }}
    >
      <h3>{props.content}</h3>
      {backgroundImg}
    </div>
  );
};
const LoadingContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('start timeout now ..')
    setTimeout(() => {
      setIsLoading(false)
      console.log('Timeout called!')
    }, 10000)
  }, []);
  
  return (
    <div>
      {isLoading ? 
        <img src={loadingGif} alt="Loading..." /> : 
        <div>
          All Data is fetched now!
        </div>
      }
    </div>
  );
};
//#endregion

//#region RENDER MAGIC
const root = ReactDOM.createRoot(document.getElementById("root"));
class App extends React.Component {
  state = {
    theme: {
      backgroundColor: "smokewhite",
      color: "black",
    },
  };
  render() {
    const bgColor = this.state.theme.backgroundColor;
    console.log(this.state.theme.backgroundColor);
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
        <StateTesting
          changeBackground={this.changeBackground}
          bgColor={bgColor}
        />
        <hr />
        <h2>Countries</h2>
        <CountriesList countries={countries} />
        <CountryTableReturn countrylist={countries} />
        <hr />
        <h2>Conditional Rendering</h2>
        <SeasonalBackground content="change background based on season of the year (autumn, winter, spring,summer):" />
        <TimedBackground content="change background based on time of the day (morning, noon, evening, night):" />
        <h3>
          show loading while real content loads (to simulate use setTimeout):
        </h3>
        <LoadingContent />
      </div>
    );
  }
}
root.render(<App />);
//#endregion
