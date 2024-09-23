import Context from "../context/characterContext";
import { useContext, useReducer } from "react";

const INITIAL_STATE = {
  loading: false,
  page: 0,
};

const ACTIONS = {
  UPDATE_LOADING: "updateLoading",
  UPDATE_PAGE: "updatePage",
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case ACTIONS.UPDATE_LOADING:
      return {
        ...state,
        loading: actions.payload,
      };

    case ACTIONS.UPDATE_PAGE:
      return {
        ...state,
        page: actions.payload,
      };
    default:
      return state;
  }
};

export const reducerCharacter = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { characterContext, setCharacterContext } = useContext(Context);
  const { loading, page } = state;

  const setLoading = (value) => {
    dispatch({
      type: ACTIONS.UPDATE_LOADING,
      payload: value,
    });
  };

  const setPage = (value) => {
    dispatch({
      type: ACTIONS.UPDATE_PAGE,
      payload: value,
    });
  };

  return {
    characterContext,
    loading,
    page,
    setCharacterContext,
    setLoading,
    setPage,
  };
};
