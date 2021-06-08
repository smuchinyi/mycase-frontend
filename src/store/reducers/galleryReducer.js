import {SET_GALLERY} from "../actions/types";

const InitialState = {
  
 'photos':[]
};

export default (state = InitialState, actions) => {
  switch (actions.type) {
    case SET_GALLERY:
      return { ...state, photos: actions.payload };

    default:
      return state;
  }
};