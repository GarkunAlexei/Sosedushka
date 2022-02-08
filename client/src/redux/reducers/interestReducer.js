import { DELETE_INTEREST, SET_CHANGE, SET_INTEREST } from "../types/interestTypes";

export const interestReducer = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
      case SET_INTEREST:
          return payload;

      case SET_CHANGE:
        return state.filter(el => el.id !== Number(payload));

      case DELETE_INTEREST:
        return [...state, payload];  
    
      default:
          return state;
  }
}
