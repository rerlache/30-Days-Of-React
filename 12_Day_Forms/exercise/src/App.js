import React, { useState } from "react";
import Header from "./components/Header";
import SubscribeCard from "./components/Subscribe";
import SeasonalBackground from "./components/conditionalRender/SeasonalBackground";
import TimedBackground from "./components/conditionalRender/TimedBackground";
import LoadingContent from "./components/conditionalRender/LoadingContent";
import UserCard from "./components/UserCard";
import userPhoto from "./assets/images/robin.jpg";
import HexaColor from "./components/HexaColor";
import NumberGenerator from "./components/NumberGenerator";
import PopulationRendering from "./components/PopulationRendering";
import StateTesting from "./components/StateTesting";
import CountriesList from "./components/countries/List";
import CountryTable from "./components/countries/Table";
import EventHandling from "./components/EventHandling";
//import CustomButton from "./components/customs/Button";

// named export in arrow function
export const AppArrowFunc = () => (
  <h1>Welcome to 30 Days Of React - Arrow function</h1>
);

// named export in regular function, function declaration
export function AppRegular() {
  return <h1>Welcome to 30 Days of React - Regular function</h1>;
}

const numberArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
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
const subHeader = "Subscribe";
const subDescription = "Sign up with your email to receive news and updates";
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

function App() {
  const [appBackground, setAppBackground] = useState("whitesmoke");
  console.log("initial background: " + appBackground);
  const backgroundHandler = () => {
    const newBG = appBackground === "whitesmoke" ? "darkgray" : "whitesmoke";
    console.log(newBG);
    setAppBackground({
      appBackground: newBG,
    });
    console.log(appBackground);
  };
  //<CustomButton doThis={backgroundHandler} text="change BG" />
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
      <NumberGenerator numbers={numberArr} />
      <hr />
      <h2>Population</h2>
      <PopulationRendering popData={tenHighestPopulation} />
      <hr />
      <h2>State Testing</h2>
      <StateTesting changeBackground={backgroundHandler} />
      <hr />
      <h2>Countries</h2>
      <CountriesList countries={countries} />
      <CountryTable countrylist={countries} />
      <hr />
      <h2>Conditional Rendering</h2>
      <SeasonalBackground content="change background based on season of the year (autumn, winter, spring,summer):" />
      <TimedBackground content="change background based on time of the day (morning, noon, evening, night):" />
      <h3>
        show loading while real content loads (to simulate use setTimeout):
      </h3>
      <LoadingContent />
      <hr />
      <h2>Event Handling</h2>
      <EventHandling />
    </div>
  );
}

export default App;
