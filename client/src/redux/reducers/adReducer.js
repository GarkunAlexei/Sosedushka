import { ADD_AD, GET_ALL_AD, GET_FIND_AD, GET_ONE_AD, SORT_AD_BY_DESC_COST, SORT_AD_BY_INC_COST } from "../types/adTypes";

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

      case SORT_AD_BY_INC_COST:
          return payload;

        case SORT_AD_BY_DESC_COST:
        return payload;

      default:
          return state;
  }
}
