import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoadingReducerState {
    isLoggingIn: boolean;
}


const initialState : LoadingReducerState = {
    isLoggingIn: false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        setIsLoggedIn : (state, action: PayloadAction<boolean>) => {
            state.isLoggingIn = action.payload;
        }
    }
});


export const loadingActions = loadingSlice.actions;
export default loadingSlice.reducer;