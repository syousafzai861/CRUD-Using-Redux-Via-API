import * as types from "./actionType";
import axios from 'axios';
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDelted = () => ({
  type: types.DELETE_USERS,
});
export const loadUsers = () => {
  return function (dispatch) {
   axios.get(`${process.env.REACT_APP_API}`).then((res) =>{
        console.log(res)
        dispatch(getUsers(res.data));
   }).catch((error)=>console.log(error));
  };
}


export const deleteUser = (id) => {
  return function (dispatch) {
   axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res) =>{
        console.log(res)
        dispatch(userDelted());
        dispatch(getUsers());
   }).catch((error)=>console.log(error));
  };
} 