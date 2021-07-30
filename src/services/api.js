import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5001", //process.env.REACT_APP_API_URL
});

export default api;
