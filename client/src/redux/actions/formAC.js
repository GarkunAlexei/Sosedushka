import { ADD_FORMS } from "../types/formsTypes"
import axios from "axios"
// import { DELETE_INTEREST } from "../types/interestTypes"

export const setForm = (value) => {
  return {
    type: ADD_FORMS, 
    payload: value
  }
}

export const getForm = () => async (dispatch) => {
  await axios('/profile')
  .then(res => {
    // console.log(res.data.forms)
    dispatch(setForm(res.data.forms))
  })
}

export const addForm = (value) => async (dispatch) => {
  const result = await axios.post('/profile', value)
  // console.log(result)
  dispatch(setForm(value))
}

export const nullForm = (value) => {
  return {
    type: ADD_FORMS, 
    payload: {},
  }
}

export const nullSetForm = () => async (dispatch) => {
  dispatch(nullForm())
}

// export const delInterst = () => {
//   return {
//     type: DELETE_INTEREST, 
//   }
// }

// export const delInterest = (id) => async (dispatch) => {
//   const res = await axios.post(`/profile/${id}`)
//   // console.log(result)
//   // console.log(res.data.delInterest)
//   dispatch(delInterst(res.data.delInterest))
// }
