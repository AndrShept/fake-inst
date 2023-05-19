export type UserProps = {
  nickName?: string;
  avatarUrl?: string;
  id?: number;
};

export enum UsersActionTypes {
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAIL = 'FETCH_USERS_FAIL',
  IS_USERS_AUTH = 'IS_USERS_AUTH',
  FETCH_AUTHORIZED_USER = 'FETCH_AUTHORIZED_USER',
  MUTATE_USER_LIKES_START = 'MUTATE_USER_LIKES',
  MUTATE_USER_LIKES_SUCCESS = 'MUTATE_USER_LIKES_SUCCESS',
  MUTATE_USER_LIKES_FAIL = 'MUTATE_USER_LIKES_FAIL'
}

export interface FetchUsersStartActions {
  type: UsersActionTypes.FETCH_USERS_START;
}
export interface FetchUsersSuccessActions {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any;
}
export interface FetchUsersFailActions {
  type: UsersActionTypes.FETCH_USERS_FAIL;
  payload: string;
}

export interface FetchAuthorizedUsersActions {
  type: UsersActionTypes.FETCH_AUTHORIZED_USER;
  payload: any;
}
export interface sethUsersAuthActions {
  type: UsersActionTypes.IS_USERS_AUTH;
  payload: boolean;
}
export interface mutateLikesStartActions {
  type: UsersActionTypes.MUTATE_USER_LIKES_START;
}
export interface mutateLikesSuccessActions {
  type: UsersActionTypes.MUTATE_USER_LIKES_SUCCESS;
  payload: any;
}
export interface mutateLikesFailActions {
  type: UsersActionTypes.MUTATE_USER_LIKES_FAIL;
  payload: string;
}

export type UsersAction =
  | FetchUsersStartActions
  | FetchUsersSuccessActions
  | FetchUsersFailActions
  | sethUsersAuthActions
  | FetchAuthorizedUsersActions
  | mutateLikesStartActions
  | mutateLikesSuccessActions
  | mutateLikesFailActions;
