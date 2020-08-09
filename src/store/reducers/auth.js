import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  error: {
    username: "",
    email: "",
    password1: "",
    non_field_errors: "",
  },
  mangaLoading: true,
  manga: [],
  mode: "light",
  loading: true,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: {
      username: "",
      email: "",
      password1: "",
      non_field_errors: "",
    },
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: {
      username: "",
      email: "",
      password1: "",
      non_field_errors: "",
    },
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
  });
};
const addManga = (state, action) => {
  return updateObject(state, {
    manga: [...state.manga, action.manga],
  });
};
const getManga = (state, action) => {
  return updateObject(state, {
    manga: action.manga,
    mangaLoading: action.mangaLoading,
  });
};
const setMode = (state, action) => {
  return updateObject(state, {
    mode: action.mode,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_MODE:
      return setMode(state, action);
    case actionTypes.ADD_MANGA:
      return addManga(state, action);
    case actionTypes.GET_MANGA:
      return getManga(state, action);
    default:
      return state;
  }
};

export default reducer;
