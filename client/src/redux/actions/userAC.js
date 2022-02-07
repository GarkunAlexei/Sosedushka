import axios from 'axios'; 
import { SET_USER } from '../types/userTypes';

/////  добавление в стор из БД
export const setUser = (value) => { 
    return { 
        type: SET_USER, 
        payload: value 
    } 
} 

export const getUser = (input) => async(dispatch) => { 
    //console.log(11111111);
    const response = await axios.post('/user/signup', input); 
    //console.log(response.data);
    dispatch(setUser(response.data.user)) 
}

export const signInUser = ( input ) => async ( dispatch ) => {
  const response = await axios.post('/user/signin', input)
  dispatch(setUser(response.data.user))
}

export const userLogout = () => async (dispatch) => {
  await axios.post('/user/logout')
  dispatch(setUser(null))
}

export const checkUser = () => async (dispatch) => {
  const res = await axios.post('/user/check')
  //console.log(res)
  if(res.statusText){
      dispatch(setUser(res.data.user))
  } else {
      dispatch(setUser(null))
  }
}
