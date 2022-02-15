import axios from 'axios';
import { DELETE_INTEREST, SET_CHANGE, SET_INTEREST } from '../types/interestTypes';

export const setInterest = (value) => {
    return {
        type: SET_INTEREST,
        payload: value
    }
}

export const getInterest = () => async (dispatch) => {
    const res = await axios('/interest')
    // console.log(res.data.filterInterest);
    dispatch(setInterest(res.data.filterInterest))
};

export const setChange = (data) => {
  return {
    type: SET_CHANGE,
    payload: data,
  }
}

export const getChange = (id) => async (dispatch) => {
  // console.log('Goooo!');
  await axios.post(`/interest/${id}`)
  dispatch(setChange(id))
}

export const delInterst = (data) => {
  return {
    type: DELETE_INTEREST, 
    payload: data,
  }
}

export const delInterest = (id) => async (dispatch) => {
  const res = await axios.post(`/profile/${id}`)
  // console.log(result)
  // console.log(res.data.delInterest)
  dispatch(delInterst(res.data.delInterest))
}
