import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoadingReducerState {
    isLoading: boolean;
    isLoggingIn: boolean;
    isSigningUp: boolean;
}

const initialState: LoadingReducerState = {
    isLoggingIn: false,
    isSigningUp: false,
    isLoading: false
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
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
