export enum PhotoActionTypes {
    FETCH_PHOTOS_START = 'FETCH_PHOTOS_START',
    FETCH_PHOTOS_FAIL = 'FETCH_PHOTOS_FAIL',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  }
  
  export interface FetchPhotosStartAction {
    type: PhotoActionTypes.FETCH_PHOTOS_START;
  }
  export interface FetchPhotosSuccessAction {
    type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS;
    payload: any[];
  }
  export interface FetchPhotosFailAction {
    type: PhotoActionTypes.FETCH_PHOTOS_FAIL;
    payload: string;
  }
  
  export interface PhotoState {
    photos: any[];
    isPhotoLoading: boolean;
    error: null|string
   
  }
  export type PhotoAction = FetchPhotosStartAction | FetchPhotosSuccessAction| FetchPhotosFailAction
  
