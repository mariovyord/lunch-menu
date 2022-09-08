import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type TItem = any;

type TCartState = {
	items: TItem[],
	toggle: boolean,
}

const getInitialState: TCartState = {
	items: [],
	toggle: false,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: getInitialState,
	reducers: {
		addItem: (state, action: PayloadAction<any>) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<any>) => {

		},
		toggle: (state) => {
			state.toggle = !state.toggle;
		}
	}
})

export const cartActions = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;