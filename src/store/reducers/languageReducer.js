import { SET_LANGUAGE } from "../actions/types";

const InitialState = {
  language: 'English',

};

export default (state = InitialState, actions) => {
  switch (actions.type) {
    case SET_LANGUAGE:
      return { ...state, language: actions.payload };

    default:
      return state;
  }
};