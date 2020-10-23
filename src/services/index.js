import axios from 'axios';
import { API_KEY, APP_KEY } from '../config';

const BASE_URL = `https://api.ambientweather.net/v1/devices/?apiKey=${API_KEY}&applicationKey=${APP_KEY}`;

export const fetch = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
