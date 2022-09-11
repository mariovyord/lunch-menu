import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type TMetaState = {
    signInDropdown: boolean,
    cartDropdown: boolean,
    profileDropdown: boolean,
    mobileMenu: boolean,
}

const initialState: TMetaState = {
    signInDropdown: false,
    cartDropdown: false,
    profileDropdown: false,
    mobileMenu: false,
}

export const metaSlice = createSlice({
    name: 'meta',
    initialState: initialState,
    reducers: {
        toggleSignInDropdown: (state) => {
            return {
                ...initialState,
                signInDropdown: !state.signInDropdown,
            }
        },
        toggleCartDropdown: (state) => {
            return {
                ...initialState,
                cartDropdown: !state.cartDropdown,
            }
        },
        toggleProfileDropdown: (state) => {
            return {
                ...initialState,
                profileDropdown: !state.profileDropdown,
            }
        },
        toggleMobileMenu: (state) => {
            return {
                ...initialState,
                mobileMenu: !state.mobileMenu,
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