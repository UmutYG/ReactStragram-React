import { createSlice } from '@reduxjs/toolkit';

export interface PostReducerState {
    isPostModalOpen: boolean;
}
const initialState: PostReducerState = {
    isPostModalOpen: false
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        openPostModal: (state) => {
            state.isPostModalOpen = true;
        },

        closePostModal: (state) => {
            state.isPostModalOpen = false;
        }
    }
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
