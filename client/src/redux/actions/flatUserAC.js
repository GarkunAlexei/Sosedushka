import axios from "axios";
import {GET_FLAT_USER} from "../types/flatUserTypes";



export const getOneFlatUser = (id) => async(dispatch) => {
  const response = await axios(`/notice/${id}`)
  console.log(response.data);
  dispatch({type: GET_FLAT_USER, payload: response.data})
}
