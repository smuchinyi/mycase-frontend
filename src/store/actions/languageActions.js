import { SET_LANGUAGE} from "./types";

export const changeLanguage = (change) => (dispatch) => {
  return dispatch({ type:SET_LANGUAGE, payload: change });
};
