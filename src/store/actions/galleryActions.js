import { SET_GALLERY } from "./types";

export const uploadGallery  = (upload) => (dispatch) =>{
    return dispatch({type:SET_GALLERY,payload:upload});
  
  }