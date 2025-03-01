import { SET_USER, LOGOUT_USER } from "../actions/authActions"; // ✅ Import action types

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
      
    case LOGOUT_USER:
      return { ...state, user: null };

    default:
      return state;
  }
}