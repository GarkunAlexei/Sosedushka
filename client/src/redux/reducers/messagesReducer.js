import { initState } from "../init/initState";
import { NEW_MESSAGE } from "../types/wsTypes";


export const messagesReducer = (state = initState, action) => {

  const { type, payload } = action; 
  
  switch (type) {

    case NEW_MESSAGE: 
      return [...state, payload]
  
    default:
      return state;
  }
}
