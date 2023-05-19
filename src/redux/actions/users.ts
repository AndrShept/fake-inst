import { Dispatch } from 'redux';
import { UsersAction, UsersActionTypes } from '../../types/UserTypes';
import axios from 'axios';
import { RootState } from '../store';

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
    const response = await axios.get(`http://localhost:3000/users/1`);
    dispatch({
      type: UsersActionTypes.FETCH_AUTHORIZED_USER,
      payload: response.data,
    });
  };
};

export const setAuthUsers = (payload = false): any => {
  return (dispatch: Dispatch<UsersAction>) => {
    // const response = await axios.get(`http://localhost:3000/users/${0}`)
    dispatch({ type: UsersActionTypes.IS_USERS_AUTH, payload });
  };
};

export const setLikes = (postId = 2, userId = 2): any => {
  return async (dispatch: Dispatch<UsersAction>, getState: () => RootState) => {
    try {
      dispatch({ type: UsersActionTypes.MUTATE_USER_LIKES_START });
      const {data} = await axios.get(`http://localhost:3000/posts/${postId}`)
      const { photos } = getState();
      // const items = photos.photos.find((item) => item.id === userId);
      const filterLikes = data.likes.filter((item:number) => item !== userId);
      // console.log(items.likes);
      console.log(photos.photos)
      if (!data.likes.includes(userId)) {
        await axios.put(`http://localhost:3000/posts/${postId}`, {
          ...data,
          likes: [...data.likes, userId],
        });


      }
      else
      {
        
        await axios.put(`http://localhost:3000/posts/${postId}`, {
          ...data,
          likes: filterLikes
        });
      
      }

      dispatch({
        type: UsersActionTypes.MUTATE_USER_LIKES_SUCCESS,
        payload: 's',
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.MUTATE_USER_LIKES_FAIL,
        payload: 'ERROR MUTATE LIKES',
      });
    }
  };
};
