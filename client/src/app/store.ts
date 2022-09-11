import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dayReducer from '../features/homePage/daySlice';
import authReducer from '../features/user/userSlice';
import { api } from '../features/api/api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import metaReducer from './metaSlice';

export const store = configureStore({
    reducer: {
        day: dayReducer,
        user: authReducer,
        meta: metaReducer,
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
