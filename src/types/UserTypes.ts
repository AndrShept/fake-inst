export type UserProps = {
  nickName?: string;
  avatarUrl?: string;
  id?: number;
};

export enum UsersActionTypes {
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAIL = 'FETCH_USERS_FAIL',
  USERS_AUTH_USER_SUCCESS = 'USERS_AUTH_USER_SUCCESS'
}

export interface FetchUsersStartActions {
  type: UsersActionTypes.FETCH_USERS_START
  
}
export interface FetchUsersSuccessActions {
  type: UsersActionTypes.FETCH_USERS_SUCCESS
  payload: any;
}
export interface FetchUsersFailActions {
  type: UsersActionTypes.FETCH_USERS_FAIL
  payload: string
  
}
export interface FetchUsersAuthActions {
  type: UsersActionTypes.USERS_AUTH_USER_SUCCESS
  payload: any
  
}

export type UsersAction = FetchUsersStartActions| FetchUsersSuccessActions | FetchUsersFailActions |FetchUsersAuthActions
