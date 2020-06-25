import { authConstants } from 'app/redux/constants';
import initialState from './initialState';

const {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} = authConstants;

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loggedIn: false,
        loading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        userInfo: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        userInfo: {},
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
