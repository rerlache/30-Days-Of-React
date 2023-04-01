import React, { Component } from "react";

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
// Shows the table with all the countries from the array
const CountryTable = ({ countrylist }) => {
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

export default CountryTable;
