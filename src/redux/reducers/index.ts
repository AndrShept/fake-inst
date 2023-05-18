import { combineReducers } from 'redux';
import { photosReducer } from './photosReducer';
import { userReducer } from './usersReducer';


export const rootReducer = combineReducers({
    photos: photosReducer,
    users: userReducer
})



