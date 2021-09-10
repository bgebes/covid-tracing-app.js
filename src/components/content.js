import React from 'react';
import getData from './tools';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: null
    };
  }

  componentDidMount() {
    getData().then(result => {
      this.setState({ table: this.fillTheTable(result) })
    });
  }

  fillTheTable(data) {
    let countries = Object.keys(data);
    let dataArray = countries.map(country => data[country].All);

    const rows = dataArray.map((tempData, index) => {
      return (
        <tr key={"row" + index}>
          <td>{dataArray.indexOf(tempData)}</td>
          <td>{countries[index]}</td>
          <td>{tempData.capital_city}</td>
          <td>{tempData.continent}</td>
          <td>{tempData.location}</td>
          <td>{tempData.abbreviation}</td>
          <td>{tempData.confirmed}</td>
          <td>{tempData.deaths}</td>
          <td>{tempData.population}</td>
          <td>{tempData.life_expectancy}</td>
          <td>{tempData.updated}</td>
        </tr>
      );
    });

    const Table = (<table>
      <thead>
        <tr>
          <th>#</th>
          <th>Country Name</th>
          <th>Capital City</th>
          <th>Continent</th>
          <th>Location</th>
          <th>Abbreviation</th>
          <th>Confirmed Patients</th>
          <th>Death Patients</th>
          <th>Population</th>
          <th>Life Expectancy</th>
          <th>Updated Time</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>);

    return Table;
  }


  render() {
    return (
      <div className="content" id="content">
        {this.state.table}
      </div>
    )
  }
}

export default Content;
