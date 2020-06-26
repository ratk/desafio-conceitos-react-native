import axios from "axios";

const api = axios.create({
  baseURL: "http://ratk.ddns.net:3333",
});

export default api;
