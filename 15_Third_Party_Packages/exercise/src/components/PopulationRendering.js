import React, { Component } from "react";

//#region Population
const Population = ({ populationData: { country, population } }) => {
  const barWidth = Math.round(population / 30000000);
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

class PopulationRendering extends Component {
  //  constructor(props) {
  //    super(props);
  //  }
  render() {
    return (
      <div>
        <h3 className="centerText">Ten most populated countries</h3>
        <GetPopulationDivList pops={this.props.popData} />
      </div>
    );
  }
}
//#endregion

export default PopulationRendering;
