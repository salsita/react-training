import axios from "axios";

const api = axios.create({
  baseURL: "http://private-e1fc4-reacttraining1.apiary-mock.com/api/v1"
});

export default api;
