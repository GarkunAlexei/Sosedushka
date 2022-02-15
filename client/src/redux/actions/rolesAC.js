import axios from 'axios';
import { SET_CHANGE } from '../types/interestTypes';

export const setRoles = (value) => {
    return {
        type: SET_CHANGE,
        payload: value
    }
}

export const getRoles = () => async (dispatch) => {
    const res = await axios('/roles')
    dispatch(setRoles(res.data.roles))
};
