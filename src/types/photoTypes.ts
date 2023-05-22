export enum PhotoActionTypes {
  FETCH_PHOTOS_START = 'FETCH_PHOTOS_START',
  FETCH_PHOTOS_FAIL = 'FETCH_PHOTOS_FAIL',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  SET_TOTAL_PHOTOS = 'SET_TOTAL_PHOTOS',
  MUTATE_PHOTO_START = 'MUTATE_PHOTO_START',
  MUTATE_PHOTO_SUCCESS = 'MUTATE_PHOTO_SUCCESS',
  MUTATE_PHOTO_FAIL = 'MUTATE_PHOTO_FAIL',
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
export interface SetTotalPhotosAction {
  type: PhotoActionTypes.SET_TOTAL_PHOTOS;
  payload: number;
}

export interface MutateLikesStartActions {
  type: PhotoActionTypes.MUTATE_PHOTO_START;
}
export interface MutateLikesSuccessActions {
  type: PhotoActionTypes.MUTATE_PHOTO_SUCCESS;
  payload: any[]
 
}
export interface MutateLikesFailActions {
  type: PhotoActionTypes.MUTATE_PHOTO_FAIL;
  payload: any
}

export interface PhotoState {
  photos: any[];
  isPhotoLoading: boolean;
  error: null | string;
  totalPhotos: number;
}
export type PhotoAction =
  | FetchPhotosStartAction
  | FetchPhotosSuccessAction
  | FetchPhotosFailAction
  | SetTotalPhotosAction
  | MutateLikesStartActions
  | MutateLikesSuccessActions
  | MutateLikesFailActions;
