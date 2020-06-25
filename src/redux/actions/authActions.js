import { authConstants } from 'app/redux/constants';
import Axios from 'utils/axios';

const loginSuccess = (user) => ({
  type: authConstants.LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: authConstants.LOGIN_FAILURE,
  payload: error,
});

export const login = (accessDetails) => async (dispatch) => {
  try {
    const { data } = await Axios.post('/login', accessDetails);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error));
    throw new Error(error);
  }
};
