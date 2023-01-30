import * as types from "./actionType";

const initialstate = {
  users: [],
  user: {},
  loading: true,
};

const userReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
