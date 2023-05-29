import { Dispatch } from 'redux';
import { UsersAction, UsersActionTypes } from '../../types/userTypes';
import axios from 'axios';

export const fetchUsers = (id = 1): any => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS_START });
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_FAIL,
        payload: 'ERROR FETCH USERS',
      });
    }
  };
};
export const fetchAuthorizedUsers = (): any => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await axios.get(`http://localhost:3000/users/3`);
    dispatch({
      type: UsersActionTypes.FETCH_AUTHORIZED_USER,
      payload: response.data,
    });
  };
};

export const setAuthUsers = (payload = false): any => {
  return (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UsersActionTypes.IS_USERS_AUTH, payload });
  };
};


