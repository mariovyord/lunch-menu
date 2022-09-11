import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type TMetaState = {
    signInDropdown: boolean,
    cartDropdown: boolean,
    profileDropdown: boolean,
}

const initialState: TMetaState = {
    signInDropdown: false,
    cartDropdown: false,
    profileDropdown: false,
}

export const metaSlice = createSlice({
    name: 'meta',
    initialState: initialState,
    reducers: {
        toggleSignInDropdown: (state) => {
            return {
                ...state,
                signInDropdown: !state.signInDropdown,
                cartDropdown: false,
                profileDropdown: false,
            }
        },
        toggleCartDropdown: (state) => {
            return {
                ...state,
                signInDropdown: false,
                cartDropdown: !state.cartDropdown,
                profileDropdown: false,
            }
        },
        toggleProfileDropdown: (state) => {
            return {
                ...state,
                signInDropdown: false,
                cartDropdown: false,
                profileDropdown: !state.profileDropdown,
            }
        },
        closeAll: () => {
            return { ...initialState }
        },
    }
})

export const metaActions = metaSlice.actions;
export const selectMeta = (state: RootState) => state.meta;

export default metaSlice.reducer;