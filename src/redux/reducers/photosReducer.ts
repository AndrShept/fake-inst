import {
  PhotoState,
  PhotoAction,
  PhotoActionTypes,
} from '../../types/photoTypes';

const initialState: PhotoState = {
  photos: [],
  isPhotoLoading: true,
  error: null,
  totalPhotos: 0,
};
export const photosReducer = (state = initialState, action: PhotoAction) => {
  switch (action.type) {
    case PhotoActionTypes.FETCH_PHOTOS_START:
      return {
        ...state,
        isPhotoLoading: true,
      };
    case PhotoActionTypes.FETCH_PHOTOS_FAIL:
      return {
        ...state,
        isPhotoLoading: false,
        error: action.payload,
      };
    case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        isPhotoLoading: false,
      };
    case PhotoActionTypes.SET_TOTAL_PHOTOS:
      return {
        ...state,
        totalPhotos: action.payload,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
