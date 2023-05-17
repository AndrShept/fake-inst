
import {  PhotoAction, PhotoActionTypes, PhotoState } from '../../types/photoTypes';
import axios from 'axios'
import { AppDispatch, RootState } from '../store';
import { Dispatch } from 'redux';

export const fetchPhotos = (page=0, limit=2):any => {
  return async (dispatch:Dispatch<PhotoAction>, getState: () => RootState) => {
    try {
      const store = getState()
      dispatch({type: PhotoActionTypes.FETCH_PHOTOS_START});
      const response = await axios.get('http://localhost:3000/posts', {
        params: {_page: page, _limit: limit}
       
      });
      dispatch({type: PhotoActionTypes.SET_TOTAL_PHOTOS, payload:response.headers['x-total-count']})
      dispatch({type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: [...store.photos.photos, ...response.data]})
    } catch (error) {
        dispatch({type: PhotoActionTypes.FETCH_PHOTOS_FAIL, payload: "Помилка загрузки ФОТО"})
    }
  };
};
