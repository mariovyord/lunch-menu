import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TUser } from '../../types/types';

type TAuthState = {
    user: null | TUser,
    showSignInForm: boolean,
    showProfileDropdown: boolean
}

const initialState: TAuthState = {
    user: null,
    showSignInForm: false,
    showProfileDropdown: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        toggleLoginForm: (state) => {
            state.showSignInForm = !state.showSignInForm;
        },
        toggleProfile: (state) => {
            state.showProfileDropdown = !state.showProfileDropdown;
        },
        setUser: (state, action: PayloadAction<TUser>) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    }
})

export const userActions = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;