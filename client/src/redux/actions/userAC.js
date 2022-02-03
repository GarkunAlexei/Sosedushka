import axios from 'axios'; 
import { GET_USERS } from '../types/userTypes';

/////  добавление в стор из БД
export const setUsers = (value) => { 
    return { 
        type: GET_USERS, 
        payload: value 
    } 
} 
export const getUsers = () => async(dispatch) => { 
    const response = await axios('/users'); 
    dispatch(setUsers(response.data.allUsers)) 
}
