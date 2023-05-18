
import {  PhotoAction, PhotoActionTypes } from '../../types/photoTypes';
import axios from 'axios'
import {  RootState } from '../store';
import { Dispatch } from 'redux';

export const fetchPhotos = (page=1, limit=5):any => {

  return async (dispatch:Dispatch<PhotoAction>, getState: () => RootState) => {

    try {

      const store = getState()
      if (page ===1){
        dispatch({type: PhotoActionTypes.FETCH_PHOTOS_START});
      }
      
      const response = await axios.get('http://localhost:3000/posts', {
        params: {_page: page, _limit: limit}
       
      });
      if ( page ===1){
        dispatch({type: PhotoActionTypes.SET_TOTAL_PHOTOS, payload:response.headers['x-total-count']})
        dispatch({type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: [ ...response.data]})
      }
      else{
        dispatch({type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: [...store.photos.photos, ...response.data]})
      }
        
    } catch (error) {
        dispatch({type: PhotoActionTypes.FETCH_PHOTOS_FAIL, payload: "Помилка загрузки ФОТО"})
    }
  };
};
