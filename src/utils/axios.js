import Axios from 'axios';

const baseURL = process.env.API_URL;
const axios = Axios.create({
  baseURL,
});

export default axios;
