import { Dispatch } from 'redux';
import { UsersAction, UsersActionTypes } from '../../types/UserTypes';
import axios from 'axios';

export const fetchUsers = (id=0):any => {
  return async (dispatch:Dispatch<UsersAction>) => {
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

export const fetchAuthUsers = ():any =>{
  return async (dispatch:Dispatch<UsersAction>) => {

    const response = await axios.get(`http://localhost:3000/users/${0}`)
    dispatch({type:UsersActionTypes.USERS_AUTH_USER_SUCCESS, payload: response.data})
  }
}
