import { PhotoTypes } from './photoTypes';

export type UserTypes = {
  nickName?: string;
  avatarUrl?: string;
  userId?: number;
  firstName?: string;
  lastName?: string;
  subscribed?: number[];
  subscribers?: number[];
  description?: string;
  url?: string;
  postsByUser?: PhotoTypes[]

};

export interface AuthorizedUserTypes extends Omit<UserTypes, 'userId'> {
  id?: number;
}
export interface UserState {
  user: UserTypes;
  isUserLoading: boolean;
  userAuth: boolean;
  authorizedUser: AuthorizedUserTypes;
}

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
  payload: UserTypes;
}
export interface FetchUsersFailActions {
  type: UsersActionTypes.FETCH_USERS_FAIL;
  payload: string;
}

export interface FetchAuthorizedUsersActions {
  type: UsersActionTypes.FETCH_AUTHORIZED_USER;
  payload: AuthorizedUserTypes;
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
