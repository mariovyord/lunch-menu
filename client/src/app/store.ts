import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dayReducer from '../features/homePage/daySlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/user/userSlice';
import { api } from '../features/api/api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        day: dayReducer,
        cart: cartReducer,
        user: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
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
