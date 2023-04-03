import React, { useState } from "react";
import CustomButton from "../customs/Button";

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

export default CountriesList