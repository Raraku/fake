import axiosConfig from "./../axiosConfig";
import { connect } from "react-redux";
import { getManga } from "../../../store/actions/auth";

function addUserManga(manga_alias) {
  let status = "";
  axiosConfig
    .get(`/manga/${manga_alias}/add_to_manga/`)
    .then((status = res.status));
  return status;
}
