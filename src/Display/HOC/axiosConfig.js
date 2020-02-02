import axios from "axios";
import { connect } from "react-redux";

const axiosConfig = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});
axiosConfig.defaults.headers.common["Authorization"] =
  "Token " + localStorage.getItem("token");

export default axiosConfig;
