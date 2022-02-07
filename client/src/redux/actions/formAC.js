import { ADD_FORMS } from "../types/formsTypes"
import axios from "axios"



export const setForm = (value) => {
  return {
    type: ADD_FORMS, 
    payload: value
  }
}

export const getForm = () => async (dispatch) => {
  await axios('/profile')
  .then(res => {
    dispatch(setForm(res.data))
  })
}

export const addForm = (value) => async (dispatch) => {
  const result = await axios.post('/profile', value)
  console.log(result)
  dispatch(setForm(value))
}
