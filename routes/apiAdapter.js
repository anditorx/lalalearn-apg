const axios = require("axios");
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: TIMEOUT,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });
};
