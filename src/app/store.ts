import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dayReducer from './slices/daySlice';

export const store = configureStore({
	reducer: {
		day: dayReducer,
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
