import { initState } from "../init/initState";
import { ADD_FORMS, CHANGE_FORM, GET_FORMS } from "../types/formsTypes";
// import { DELETE_INTEREST } from "../types/interestTypes";


export const formReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_FORMS:
      return payload

    case GET_FORMS:
      return payload;

    case CHANGE_FORM:
      return state.map( el => {
        if (el.id === payload.id){
          return payload
        } else {
          return el
        };
      })
    default:
      return state;
  }
}
