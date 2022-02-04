import { SET_USER } from "../types/userTypes";


export const userReducer = (state = [], action) => {

  const {type, payload} = action;

  switch (type) {
/////  добавление в стор из БД
      case SET_USER:
          return payload;

      default:
          return state;
  }
}
