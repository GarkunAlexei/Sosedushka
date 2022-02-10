import { NEW_MESSAGE } from "../types/wsTypes";


export const messagesReducer = (state = [], action) => {

  const { type, payload } = action; 
  
  switch (type) {

    case NEW_MESSAGE: 
      return [...state, payload]
  
    default:
      return state;
  }
}
