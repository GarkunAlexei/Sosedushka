import { GET_USERS } from "../types/userTypes";


export const userReducer = (state = [], action) => {

  const {type, payload} = action;

  switch (type) {
/////  добавление в стор из БД
      case GET_USERS:
          return payload;

      default:
          return state;
  }
}
