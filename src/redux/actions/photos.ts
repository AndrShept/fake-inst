import { PhotoAction, PhotoActionTypes } from '../../types/photoTypes';
import axios from 'axios';
import { RootState } from '../store';
import { Dispatch } from 'redux';
export const fetchPhotos = (page = 1, limit = 5): any => {
  return async (dispatch: Dispatch<PhotoAction>, getState: () => RootState) => {
    try {
      const store = getState();
      if (page === 1) {
        dispatch({ type: PhotoActionTypes.FETCH_PHOTOS_START });
      }

      const response = await axios.get('http://localhost:3000/posts', {
        params: { _page: page, _limit: limit },
      });
      if (page === 1) {
        dispatch({
          type: PhotoActionTypes.SET_TOTAL_PHOTOS,
          payload: response.headers['x-total-count'],
        });
        dispatch({
          type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
          payload: [...response.data],
        });
      } else {
        dispatch({
          type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
          payload: [...store.photos.photos, ...response.data],
        });
      }
    } catch (error) {
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_FAIL,
        payload: 'Помилка загрузки ФОТО',
      });
    }
  };
};

export const toggleLike = (userId: number, id: number): any => {
  return async (dispatch: Dispatch<PhotoAction>, getState: () => RootState) => {
    dispatch({ type: PhotoActionTypes.MUTATE_PHOTO_START });

    const { photos } = getState();
    const findPhotos = photos.photos.find((item) => item.id === id);
    const findIndex = photos.photos.findIndex((item) => item.id === id);

    const newPhotos = { ...findPhotos, likes: [...findPhotos!.likes] };
    if (!newPhotos.likes.includes(userId)) {
      newPhotos.likes = [...newPhotos.likes, userId];
    } else {
      newPhotos.likes = newPhotos.likes.filter(
        (item: number) => item !== userId
      );
    }
    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, {
        ...newPhotos,
      });
      dispatch({
        type: PhotoActionTypes.MUTATE_PHOTO_SUCCESS,
        payload: photos.photos,
      });

      photos.photos[findIndex] = response.data;
    } catch (error) {
      dispatch({ type: PhotoActionTypes.MUTATE_PHOTO_FAIL, payload: error });
    }
  };
};

export const setComment = (
  id: number,
  nickName: string,
  text: string,
  userId: number,
  avatarUrl: string
): any => {
  return async (dispatch: Dispatch<PhotoAction>, getState: () => RootState) => {
    dispatch({ type: PhotoActionTypes.MUTATE_PHOTO_START });

    const { photos } = getState();
    const findPhotos = photos.photos.find((item) => item.id === id);
    const findIndex = photos.photos.findIndex((item) => item.id === id);
    const NewPhotos = findPhotos;
    NewPhotos!.comments = [
      ...findPhotos!.comments,
      { nickName, text, userId, avatarUrl },
    ];

    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, {
        ...NewPhotos,
      });
      photos.photos[findIndex] = response.data;
      dispatch({
        type: PhotoActionTypes.MUTATE_PHOTO_SUCCESS,
        payload: photos.photos,
      });
    } catch (error) {
      dispatch({ type: PhotoActionTypes.MUTATE_PHOTO_FAIL, payload: error });
    }
  };
};
