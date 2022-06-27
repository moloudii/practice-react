import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_DEV_BASE_ADDRESS;
axios.defaults.headers.common["Authorization"] = 555;

export function get(url, config = {}) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function post(url, data, config) {
  return axios
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

// Class
export class HttpClient {
  constructor(config = {}) {
    this.service = axios.create({
      ...config,
      baseURL: config.baseURL || process.env.REACT_APP_DEV_BASE_ADDRESS,
    });
  }
  get(url, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
  post(url, data, config) {
    return axios
      .post(url, data, config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
}
