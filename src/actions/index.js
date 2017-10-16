import axios from 'axios';

import { API_KEY } from '../../api-key';

const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${URL}&q=${city},us`;
  const request = axios.get(url);

  console.log(`Request`, request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}