import axios from "axios";
import { ADD_AD, GET_ALL_AD, GET_ONE_AD } from "../types/adTypes";

export const addAd = (value) => async(dispatch) => {
  console.log('VALUE an ACTION ===>', value);
  const response = await axios.post('/notice', value)
  console.log('DATA FROM BACK ======>', response.data);
  console.log(response.statusText);
  dispatch({ type: ADD_AD, payload: response.data})
}

export const getAllAd = () => async(dispatch) => {
  const response = await axios('/notice')
  console.log(response.data);
  dispatch({ type: GET_ALL_AD, payload: response.data})
}
