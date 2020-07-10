import Axios from 'axios';
import { getApiUrl } from 'utils/utils';

const baseURL = getApiUrl();

const axios = Axios.create({
  baseURL,
});

export default axios;
