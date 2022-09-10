import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type TAuthState = {
    user: null | string,
    toggleSignIn: boolean,
}

const initialState: TAuthState = {
    user: null,
    toggleSignIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        toggleDropdown: (state) => {
            state.toggleSignIn = !state.toggleSignIn;
        },
        setUser: (state, action: PayloadAction<any>) => {
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