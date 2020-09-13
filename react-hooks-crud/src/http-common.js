import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://morning-hollows-26967.herokuapp.com/api"
      : "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
