
import { PhotoActionTypes } from '../../types/photoTypes';
import axios from 'axios'


export const fetchPhotos = () => {
  return async (dispatch) => {
    try {
      dispatch(PhotoActionTypes.FETCH_PHOTOS_START);
      const response = await axios.get('http://localhost:3000/posts',{
        params: {
          _page: 0,
          _limit: 5,
        },
      });
      dispatch(getPhotoSucescs(response.data))
    } catch (error) {
        dispatch(getPhotoFailed(error))
    }
  };
};
