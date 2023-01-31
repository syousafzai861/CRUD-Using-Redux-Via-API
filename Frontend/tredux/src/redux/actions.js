import * as types from "./actionType";
import axios from "axios";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDelted = () => ({
  type: types.DELETE_USERS,
});

const userUpdated = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const userAdded = () => ({
  type: types.ADD_USERS,
});

const usergotUpdate = () => ({
  type: types.UPDATE_USERS,
});
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log(res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(userDelted());
        dispatch(getUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log(res);
        dispatch(userAdded());
        // dispatch(getUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(userUpdated(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getupdateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log(res);
        dispatch(usergotUpdate());
      })
      .catch((error) => console.log(error));
  };
};
