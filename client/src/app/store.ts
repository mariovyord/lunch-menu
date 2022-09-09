import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dayReducer from './slices/daySlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
	reducer: {
		day: dayReducer,
		cart: cartReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
