export type UserTypes = {
  nickName?: string;
  avatarUrl?: string;
  userId: number| string;

};

export enum UsersActionTypes {
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAIL = 'FETCH_USERS_FAIL',
  IS_USERS_AUTH = 'IS_USERS_AUTH',
  FETCH_AUTHORIZED_USER = 'FETCH_AUTHORIZED_USER',
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
export interface SethUsersAuthActions {
  type: UsersActionTypes.IS_USERS_AUTH;
  payload: boolean;
}

export type UsersAction =
  | FetchUsersStartActions
  | FetchUsersSuccessActions
  | FetchUsersFailActions
  | SethUsersAuthActions
  | FetchAuthorizedUsersActions;
