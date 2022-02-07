import axios from 'axios';
import { SET_INTEREST } from '../types/interestTypes';

export const setInterest = (value) => {
    return {
        type: SET_INTEREST,
        payload: value
    }
}

export const getInterest = () => async (dispatch) => {
    const res = await axios('/interest')
    //console.log(res.data.interest);
    dispatch(setInterest(res.data.interest))
};
