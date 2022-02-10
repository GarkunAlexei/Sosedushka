import axios from "axios";
import { ADD_AD, GET_ALL_AD, GET_FIND_AD, SORT_AD_BY_DESC_COST, SORT_AD_BY_INC_COST } from "../types/adTypes";

export const addAd = (value, urls) => async(dispatch) => {
  // console.log('VALUE an ACTION ===>', value);
  // console.log('URLS AC===>', urls);
  const data = {...value, img: urls}
  // console.log('DATA====>', data);
  const response = await axios.post('/notice', data)
  // console.log('DATA FROM BACK ======>', response.data);
  // console.log(response.statusText);
  dispatch({ type: ADD_AD, payload: response.data})
}

export const getAllAd = () => async(dispatch) => {
  const response = await axios('/notice')
  // console.log(response.data);
  dispatch({ type: GET_ALL_AD, payload: response.data})
}

export const getFindAd = (word) => async(dispatch) => {
  const response = await axios.post('/notice/searcher', {word})
  // console.log(response.data);
  dispatch({ type: GET_FIND_AD, payload: response.data})
}

export const sortAdByIncCost = (value) => {
  return {
    type: SORT_AD_BY_INC_COST, 
    payload: value
  }
}
export const getSortAdByInc = (data) => async(dispatch) => {
  const response = await axios.post('/notice/asc')
  dispatch(sortAdByIncCost(response.data))
}

export const sortAdByDescCost = (value) => {
  return {
    type: SORT_AD_BY_DESC_COST, 
    payload: value
  }
}

export const getSortAdByDesc = (data) => async(dispatch) => {
  const response = await axios.post('/notice/desc')
  dispatch(sortAdByDescCost(response.data))
}
