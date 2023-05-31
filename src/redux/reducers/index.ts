import { combineReducers } from 'redux';
import { photosReducer } from './photosReducer';
import { usersReducer } from './usersReducer';
import { postsByUserReducer } from './postsByUserReducer';


export const rootReducer = combineReducers({
    photos: photosReducer,
    users: usersReducer,
    postsByUser: postsByUserReducer
})



