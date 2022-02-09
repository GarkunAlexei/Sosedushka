import { initState } from "../init/initState";
import { ADD_FORMS, GET_FORMS } from "../types/formsTypes";
// import { DELETE_INTEREST } from "../types/interestTypes";


export const formReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_FORMS:
      return payload

    case GET_FORMS:
      return payload;
      
    default:
      return state;
  }
}
