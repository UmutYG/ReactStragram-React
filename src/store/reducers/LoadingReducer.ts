import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoadingReducerState {
    isLoggingIn: boolean;
    isSigningUp: boolean;
}

const initialState: LoadingReducerState = {
    isLoggingIn: false,
    isSigningUp: false
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        setIsLoggingIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggingIn = action.payload;
        },
        setIsSigningUp: (state, action: PayloadAction<boolean>) => {
            state.isSigningUp = action.payload;
        }
    }
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice.reducer;
