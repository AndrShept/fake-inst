export interface PostByUserTypes {
  id: number;
  imgUrl: string;
  likes: number[];
  comments: CommentsTypes[];
  author: AuthorTypes;
  title: string;
  body: string;
}

export interface PostByUserState {
  posts: PostByUserTypes[];
  isPostsLoading: boolean;
  error: null | string;
  totalPosts: number;
  isMutateByPostLoading: boolean
  // isMutateLoading: boolean;
}

export interface CommentsTypes {
  nickName: string;
  text: string;
  avatarUrl?: string;
  userId: number;
}

export interface AuthorTypes {
  id: number;
  nickName: string;
  avatarUrl: string;
}

export enum PostByUserActionTypes {
  FETCH_POSTS_START = 'FETCH_POSTS_START',
  FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  SET_TOTAL_POSTS = 'SET_TOTAL_POSTS',
  MUTATE_POSTS_START = 'MUTATE_POSTS_START',
  MUTATE_POSTS_SUCCESS = 'MUTATE_POSTS_SUCCESS',
  MUTATE_POSTS_FAIL = 'MUTATE_POSTS_FAIL',
}

export interface FetchPostsStartAction {
  type: PostByUserActionTypes.FETCH_POSTS_START;
}
export interface FetchPostsSuccessAction {
  type: PostByUserActionTypes.FETCH_POSTS_SUCCESS;
  payload: PostByUserTypes[];
}
export interface FetchPostsFailAction {
  type: PostByUserActionTypes.FETCH_POSTS_FAIL;
  payload: any;
}
export interface SetTotalPostsAction {
  type: PostByUserActionTypes.SET_TOTAL_POSTS;
  payload: number;
}

export interface MutateLikesByPostStartActions {
  type: PostByUserActionTypes.MUTATE_POSTS_START;
}
export interface MutateLikesByPostSuccessActions {
  type: PostByUserActionTypes.MUTATE_POSTS_SUCCESS;
  payload: PostByUserTypes[];
}
export interface MutateLikesByPostFailActions {
  type: PostByUserActionTypes.MUTATE_POSTS_FAIL;
  payload: any;
}

export type PostByUserAction =
  | FetchPostsStartAction
  | FetchPostsSuccessAction
  | FetchPostsFailAction
  | SetTotalPostsAction
  | MutateLikesByPostStartActions
  | MutateLikesByPostSuccessActions
  | MutateLikesByPostFailActions;
