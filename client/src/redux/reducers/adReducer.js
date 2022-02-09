import { ADD_AD, GET_ALL_AD, GET_FIND_AD, GET_ONE_AD } from "../types/adTypes";

export const adReducer = (state = [], action) => {

  const { type, payload } = action;

  switch (type) {
      case GET_ALL_AD:
          return payload;

      case ADD_AD:
          return [...state, payload];

      case GET_ONE_AD:
          return payload;

      case GET_FIND_AD:
        return payload;

      default:
          return state;
  }
}
