import { PostByUserState, PostByUserAction, PostByUserActionTypes } from '../../types/postByUserTypes';

const initialState: PostByUserState = {
  posts: [],
  isPostsLoading: false,
  totalPosts: 0,
  error: '',
  isMutateByPostLoading: false
};

export const postsByUserReducer = (state = initialState, action: PostByUserAction) => {
  switch (action.type) {
    case PostByUserActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isPostsLoading: true,
      };
    case PostByUserActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        posts: action.payload,
      };
    case PostByUserActionTypes.FETCH_POSTS_FAIL:
      return {
        ...state,
        isPostsLoading: false,
        error: action.payload,
      };
      case PostByUserActionTypes.SET_TOTAL_POSTS:
        return {
          ...state,
          totalPosts: action.payload
        }

        case PostByUserActionTypes.MUTATE_POSTS_START:
          return {
            ...state,
            isMutateByPostLoading: true
          }
        case PostByUserActionTypes.MUTATE_POSTS_SUCCESS:
          return {
            ...state,
            isMutateByPostLoading: false,
            posts: action.payload
          }
        case PostByUserActionTypes.MUTATE_POSTS_FAIL:
          return {
            ...state,
            isMutateByPostLoading: false
          }
    default:
      return {
        ...state,
      };
  }
};
