import lodash from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(data) {
        const name        = data.city.name;
        const temps       = lodash.map(data.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures   = data.list.map(weather => weather.main.pressure);
        const humidities  = data.list.map(weather => weather.main.humidity);
        const {lon, lat } = data.city.coord;

        return (
            <tr key={ name }>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temps} color="green" unit="C"/>
                </td>
                <td>
                    <Chart data={pressures} color="black" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="red" unit="%"/>
                </td>
            </tr>

        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);