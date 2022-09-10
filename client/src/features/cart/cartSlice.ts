import { createSlice } from '@reduxjs/toolkit';
import { TCartProduct } from '../../types/types';
import { RootState } from '../../app/store';

type TCartState = {
    items: TCartProduct[],
    toggle: boolean,
    animate: boolean,
}

const getInitialState: TCartState = {
    items: [],
    toggle: false,
    animate: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: getInitialState,
    reducers: {
        toggle: (state) => {
            state.toggle = !state.toggle;
        },
        stopAnimation: (state) => {
            state.animate = false;
        }
    }
})

export const cartActions = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;