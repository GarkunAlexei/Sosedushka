import { SET_INTEREST } from "../types/interestTypes";

export const interestReducer = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
      case SET_INTEREST:
          return payload;
  
      default:
          return state;
  }
}
