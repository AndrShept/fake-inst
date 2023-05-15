
import { PhotoActionTypes } from '../../types/photoTypes';
import axios from 'axios'
import {Dispatch} from 'redux'
import {PhotoAction} from '../../types/photoTypes'

export const fetchPhotos = (page = 0, limit= 5) => {
  return async (dispatch:Dispatch<PhotoAction>) => {
    try {
      dispatch({type: PhotoActionTypes.FETCH_PHOTOS_START});
      const response = await axios.get('http://localhost:3000/posts',{
        params: {
          _page: page,
          _limit: limit,
        },
      });
      dispatch({type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: PhotoActionTypes.FETCH_PHOTOS_FAIL, payload: "Помилка загрузки ФОТО"})
    }
  };
};
