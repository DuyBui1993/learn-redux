import {configureStore} from '@reduxjs/toolkit';
import {todoSlices} from "@/features/todo.slices";
import {authSlice} from "@/features/LoginGlobal";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const persistConfig = {
    key: 'root',
    version: 1,

    storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);
export const makeStore = () => {
    return configureStore({
        reducer: {
            todos: todoSlices.reducer,
            auth: persistedAuthReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const persistor = persistStore(makeStore());