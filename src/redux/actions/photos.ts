
import { PhotoActionTypes } from '../../types/photoTypes';
import axios from 'axios'
import { AppDispatch } from '../store';

export const fetchPhotos = () => {
  return async (dispatch:AppDispatch) => {
    try {
      dispatch({type: PhotoActionTypes.FETCH_PHOTOS_START});
      const response = await axios.get('http://localhost:3000/posts');
      dispatch({type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: PhotoActionTypes.FETCH_PHOTOS_FAIL, payload: "Помилка загрузки ФОТО"})
    }
  };
};
