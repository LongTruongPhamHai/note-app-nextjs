import axios from "axios";

// Running server: json-server --watch src/data/db.json --port 5000

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/notes",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosClient;
