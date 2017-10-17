import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather({ city, list }) {
    const temperature = list.map(weather => weather.main.temp);
    const pressure = list.map(weather => weather.main.pressure);
    const humidity = list.map(weather => weather.main.humidity);

    return(
      <tr key={city.name}>
        <td width="25%">
          <h4>{city.name}</h4>
        </td>
        <td width="25%"><Chart data={temperature} color="orange"></Chart></td>
        <td width="25%"><Chart data={pressure} color="blue"></Chart></td>
        <td width="25%"><Chart data={humidity} color="green"></Chart></td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);