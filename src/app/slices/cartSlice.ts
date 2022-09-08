import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartProduct } from '../../types/types';
import { RootState } from '../store';

type TCartState = {
	items: TCartProduct[],
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
			const newItem = {
				title: action.payload.title,
				qty: 1,
				price: action.payload.price
			}

			const existing = state.items.find(x => x.title === newItem.title);
			if (existing) {
				existing.qty++;
			} else {
				state.items.push(newItem);
			}
		},
		removeItem: (state, action: PayloadAction<any>) => {

		},
		changeQty: (state, action: PayloadAction<TCartProduct>) => {
			const existing = state.items.find(x => x.title === action.payload.title);
			if (existing) {
				if (action.payload.qty <= 0) {
					const index = state.items.indexOf(existing);
					const firstPart = state.items.slice(0, index);
					const secondPart = state.items.slice(index + 1);
					state.items = [...firstPart, ...secondPart];
				} else {
					existing.qty = action.payload.qty;
				}
			} else {
				console.log('no such item');
				// TODO add error notification
			}
		},
		toggle: (state) => {
			state.toggle = !state.toggle;
		}
	}
})

export const cartActions = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;