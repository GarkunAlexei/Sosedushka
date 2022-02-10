import { initState } from "../init/initState";
import { WS_CONNECT, NEW_MESSAGE } from "../types/wsTypes";


export const wsReduser = (state = initState, action) => {

  const { type, payload } = action; 
  
  switch (type) {
    case WS_CONNECT:
      
      return new WebSocket("ws://localhost:3001");

    case NEW_MESSAGE: 
      return [...state, payload]
  
    default:
      return state;
  }
}
