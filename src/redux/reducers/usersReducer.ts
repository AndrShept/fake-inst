import { UsersAction, UsersActionTypes } from '../../types/UserTypes';

const initialState = {
  user: {},
  isUserLoading: true,
  userAuth: {},
};

export const userReducer = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_START:
      return {
        ...state,
        isUserLoading: true,
      };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isUserLoading: false,
      };
    case UsersActionTypes.FETCH_USERS_FAIL:
      return {
        ...state,
        isUserLoading: false,
      };

    case UsersActionTypes.USERS_AUTH_USER_SUCCESS:
      return {
        ...state,
        userAuth: action.payload,
        isUserLoading: false,
      };

    default:
      return { ...state };
  }
};
