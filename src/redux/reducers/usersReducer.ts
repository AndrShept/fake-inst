import { UsersAction, UsersActionTypes } from '../../types/UserTypes';

const initialState = {
  user: {},
  isUserLoading: true,
  userAuth: false,
  authorizedUser: {},

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

    case UsersActionTypes.IS_USERS_AUTH:
      return {
        ...state,
        userAuth: action.payload,
        isUserLoading: false,
      };
      case UsersActionTypes.FETCH_AUTHORIZED_USER:
        return {
          ...state,
          authorizedUser:action.payload
        }

   

    default:
      return { ...state };
  }
};
