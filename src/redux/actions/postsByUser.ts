import { Dispatch } from 'react';
import {
  PostByUserAction,
  PostByUserActionTypes,
} from '../../types/postByUserTypes';
import axios from 'axios';
import { RootState } from '../store';

export const fetchPosts = (page = 1): any => {
  return async (
    dispatch: Dispatch<PostByUserAction>,
    getState: () => RootState
  ) => {
    try {
      const state = getState();
      if (page === 1) {
        dispatch({ type: PostByUserActionTypes.FETCH_POSTS_START });
      }

      const response = await axios.get('http://localhost:3000/postsByUser', {
        params: {
          _page: page,
          _limit: 10,
        },
      });

      if (page === 1) {
        dispatch({
          type: PostByUserActionTypes.SET_TOTAL_POSTS,
          payload: response.headers['x-total-count'],
        });
        dispatch({
          type: PostByUserActionTypes.FETCH_POSTS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: PostByUserActionTypes.FETCH_POSTS_SUCCESS,
          payload: [...state.postsByUser.posts, ...response.data],
        });
      }
    } catch (error) {
      dispatch({
        type: PostByUserActionTypes.FETCH_POSTS_FAIL,
        payload: error,
      });
    }
  };
};

export const toggleLikeByPost = (userId: number, idPost: number): any => {
  return async (
    dispatch: Dispatch<PostByUserAction>,
    getState: () => RootState
  ) => {
    dispatch({ type: PostByUserActionTypes.MUTATE_POSTS_START });

    const { postsByUser } = getState();
    const findPhotos = postsByUser.posts.find((item) => item.id === idPost);
    const findIndex = postsByUser.posts.findIndex((item) => item.id === idPost);
    console.log(postsByUser);
    const newPosts = { ...findPhotos, likes: [...findPhotos!.likes] };
    if (!newPosts.likes.includes(userId)) {
      newPosts.likes = [...newPosts.likes, userId];
    } else {
      newPosts.likes = newPosts.likes.filter((item: number) => item !== userId);
    }
    try {
      const response = await axios.put(
        `http://localhost:3000/postsByUser/${idPost}`,
        {
          ...newPosts,
        }
      );
      dispatch({
        type: PostByUserActionTypes.MUTATE_POSTS_SUCCESS,
        payload: postsByUser.posts,
      });

      postsByUser.posts[findIndex] = response.data;
    } catch (error) {
      dispatch({
        type: PostByUserActionTypes.MUTATE_POSTS_FAIL,
        payload: error,
      });
    }
  };
};
