import {configureStore} from '@reduxjs/toolkit';
import {todoSlices} from "@/features/todo.slices";
import {authSlice} from "@/features/LoginGlobal";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);
export const makeStore = () => {
    return configureStore({
        reducer: {
            todos: todoSlices.reducer,
            auth: persistedAuthReducer,
        },
    });
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const persistor = persistStore(makeStore());