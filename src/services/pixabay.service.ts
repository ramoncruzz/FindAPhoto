import axios from 'axios';
import Config from 'react-native-config';

const Pixabay = axios.create({
  baseURL: Config.API_HOST,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Pixabay;
