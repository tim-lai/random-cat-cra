import axios from 'axios/index';

const getRandomCatImage = () => {
  let baseUrl = `http://localhost:3010/api/v1/cat`;
  // allow sending of browser cookie via config
  const config = {
    withCredentials: true,
  };
  return axios.get(baseUrl, config)
    .then((res) => {
      // console.log('api.service... getRandomCatImage res.data:', res.data);
      return { data: res.data.data };
    })
    .catch((err) => {
      // console.log('api.service... getRandomCatImage err:', err);
      // if using authenticated route via cookie, expect status code 400 if cookie not sent
      return { error: 'unable to make request' };
    });
};

const getLoginStatus = () => {
  let baseUrl = `http://localhost:3010/api/v1/login`;
  // allow sending of browser cookie via config
  const config = {
    withCredentials: true,
  };
  return axios.get(baseUrl, config)
    .then((res) => {
      // console.log('api.service... getLoginStatus res.data:', res.data);
      return { data: res.data.data };
    })
    .catch((err) => {
      // console.log('api.service... getLoginStatus err:', err);
      return { error: 'unable to make request' };
    });
};

const loginUser = ({ data, config }) => {
  // expect data = { username, password}
  let baseUrl = `http://localhost:3010/api/v1/login`;
  return axios.post(baseUrl, data, config)
    .then((res) => {
      // console.log('api.service... loginUser res:', res);
      // console.log('api.service... loginUser res.data:', res.data);
      return { message: res.data.message, data: res.data.data };
    })
    .catch((err) => {
      // console.log('api.service... loginUser err:', err);
      return { error: 'unable to make request' };
    });
};

const ApiService = {
  getRandomCatImage,
  getLoginStatus,
  loginUser,
};

export default ApiService;
