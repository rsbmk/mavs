import { useUser } from "../../hooks/useUser";
import { useReducer } from "react";

const INITIAL_STATE = {
  username: "",
  password: "",
};

const ACTIONS = {
  UPDATE_PASSWORD: "update_password",
  UPDATE_USERNAME: "update_username",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case ACTIONS.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export const reducerLogin = () => {
  const { loadingLogin, isLogged, error, login, setLoadingLogin } = useUser();

  const handleUsername = (evt) => {
    dispatch({
      type: ACTIONS.UPDATE_USERNAME,
      payload: evt.target.value,
    });
  };

  const hanldePassword = (evt) => {
    dispatch({
      type: ACTIONS.UPDATE_PASSWORD,
      payload: evt.target.value,
    });
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    setLoadingLogin(true);
    login({ username, password });

    dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: "" });
    dispatch({ type: ACTIONS.UPDATE_USERNAME, payload: "" });
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { username, password } = state;

  return {
    username,
    password,
    isLogged,
    error,
    loadingLogin,
    handleUsername,
    hanldePassword,
    handleLogin,
  };
};
