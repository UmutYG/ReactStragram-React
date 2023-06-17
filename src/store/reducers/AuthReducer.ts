import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthReducerState {
    token: string;
}

const initialState: AuthReducerState = {
    token: ''
};

const authSlice = createSlice({
    initialState: initialState,
    name: 'auth',
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    }
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
