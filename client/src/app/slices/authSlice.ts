import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type TAuthState = {
    user: null | string,
    toggleSignIn: boolean,
}

const initialState: TAuthState = {
    user: null,
    toggleSignIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        toggleSignIn: (state) => {
            state.toggleSignIn = !state.toggleSignIn;
        },
    }
})

export const authActions = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;