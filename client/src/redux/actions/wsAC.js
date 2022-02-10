import { NEW_MESSAGE } from "../types/wsTypes"

export const setMessage = (value) => {
  return {
    type: NEW_MESSAGE,
    payload: value,
  }
}

export const addMessage = (value) => (dispatch) => {
  
  dispatch(setMessage(value))
}
