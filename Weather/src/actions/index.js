import axios from 'axios';

const API_KEY  = 'bd6277244eaf2403ec40ef0b1cff3081';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url     = `${BASE_URL}&q=${city},isr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}