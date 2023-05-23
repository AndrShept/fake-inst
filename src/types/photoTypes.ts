
export interface PhotoTypes {
  id: number;
  imgUrl: string;
  likes: string[];
  comments: CommentsTypes[]
  author: { id: number; nickName: string; avatarUrl: string };
  title: string;
  body: string;
}

export interface CommentsTypes {
  nickName: string;
  text: string;
  avatarUrl?: string;
  userId: number | string
}

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
  payload: PhotoTypes[];
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
  payload: PhotoTypes[];
}
export interface MutateLikesFailActions {
  type: PhotoActionTypes.MUTATE_PHOTO_FAIL;
  payload: any;
}

export interface PhotoState {
  photos: PhotoTypes[];
  isPhotoLoading: boolean;
  error: null | string;
  totalPhotos: number;
  isMutateLoading: boolean;
}


export type PhotoAction =
  | FetchPhotosStartAction
  | FetchPhotosSuccessAction
  | FetchPhotosFailAction
  | SetTotalPhotosAction
  | MutateLikesStartActions
  | MutateLikesSuccessActions
  | MutateLikesFailActions;
