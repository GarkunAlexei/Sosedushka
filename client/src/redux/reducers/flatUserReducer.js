import { GET_FLAT_USER } from "../types/flatUserTypes";

export const flatUserReducer = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
      case GET_FLAT_USER:
          return payload;
  
      default:
          return state;
  }
}
