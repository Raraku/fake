import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://elitemanga-79e49.appspot.com/"
});
if (localStorage.getItem("token") !== null) {
  axiosConfig.defaults.headers.common["Authorization"] =
    "Token " + localStorage.getItem("token");
}

export default axiosConfig;
