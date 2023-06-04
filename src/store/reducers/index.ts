import { combineReducers } from '@reduxjs/toolkit';

import PostReducer from './PostReducer';
import { PostReducerState } from './PostReducer';

export interface RootState {
    post: PostReducerState;
}

const rootReducer = combineReducers({
    post: PostReducer
});

export default rootReducer;
