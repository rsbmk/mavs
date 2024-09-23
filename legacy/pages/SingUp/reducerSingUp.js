import { useReducer } from "react";
import { singUpService } from "../../services/singUpService";

const INITIAL_STATE = {
  name: "",
  username: "",
  password: "",
  user: "",
};

const ACTIONS = {
  UPDATE_NAME: "updateName",
  UPDATE_USERNAME: "updateUsername",
  UPDATE_PASSWORD: "updatePassword",
  UPDATE_USER: "updateUser",
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case ACTIONS.UPDATE_NAME:
      return {
        ...state,
        name: actions.payload,
      };

    case ACTIONS.UPDATE_USERNAME:
      return {
        ...state,
        username: actions.payload,
      };

    case ACTIONS.UPDATE_PASSWORD:
      return {
        ...state,
        password: actions.payload,
      };

    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: actions.payload,
      };

    default:
      return state;
  }
};

export const reducerSingUp = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { name, username, password, user } = state;

  const handleSingUp = (e) => {
    e.preventDefault();
    const { resAPILogin } = singUpService({ name, username, password });
    resAPILogin
      .then((user) => {
        dispatch({
          type: ACTIONS.UPDATE_USER,
          payload: user,
        });
      })
      .catch((e) => console.error(e));

    dispatch({ type: ACTIONS.UPDATE_NAME, payload: "" });
    dispatch({ type: ACTIONS.UPDATE_USERNAME, payload: "" });
    dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: "" });
  };

  const handleUsername = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_USERNAME,
      payload: e.target.value,
    });
  };

  const hanldePassword = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_PASSWORD,
      payload: e.target.value,
    });
  };
  const hanldeName = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_NAME,
      payload: e.target.value,
    });
  };

  return {
    handleSingUp,
    handleUsername,
    hanldePassword,
    hanldeName,
    name,
    user,
    username,
    password,
  };
};
