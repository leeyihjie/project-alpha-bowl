import axios from "axios";

const API = axios.create({
  baseURL: "", // Replace baseURL with url of backend server
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
