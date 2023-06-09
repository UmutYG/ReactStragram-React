import { combineReducers } from '@reduxjs/toolkit';

import PostReducer from './PostReducer';
import LoadingReducer, { LoadingReducerState } from './LoadingReducer';
import { PostReducerState } from './PostReducer';

export interface RootState {
    post: PostReducerState;
    loading: LoadingReducerState
}

const rootReducer = combineReducers({
    post: PostReducer,
    loading: LoadingReducer,
});

export default rootReducer;
