import * as types from "./actionType";
import axios from 'axios';
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios({
        method: "get",
        url: "http://localhost:1337/api/infos",
        headers: {
          Authorization:
            "Bearer a7b018335f71a7329bcda8c826767415e3dcc5801a5f78d0473ab4538e7e18718327a07b3a3a29d84ea23833f13422056778a52bdf8325e52c4790ff90f17ee5e12788b0636c01606a23aaad49b69e4b2e6a1d3bf92d9e487ae8f225ea10a24fd98039a98a36497761018ab3273460c0fb7646839e3d87eab3d276e6a3191e63",
          // "Content-Type": "application/json"
        },
      }).then((res) => {
       console.log(res)
       dispatch(getUsers(res.data));
      }).catch((error) => console.log(error));
    
    };
  };

