import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(weather) {
    const name = weather.city.name;
    const temperature = weather.list.map(weather => weather.main.temp);
    const pressure = weather.list.map(weather => weather.main.pressure);
    const humidity = weather.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td width="10%">{name}</td>
        <td width="30%"><Chart data={temperature} color="orange" /></td>
        <td width="30%"><Chart data={pressure} color="green" /></td>
        <td width="30%"><Chart data={humidity} color="black" /></td>
      </tr>
    )
  }

  render() {
    return (
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