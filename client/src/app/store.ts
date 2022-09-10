import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dayReducer from '../features/homePage/daySlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/userSlice';
import { authApi } from '../features/api/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        day: dayReducer,
        cart: cartReducer,
        user: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
