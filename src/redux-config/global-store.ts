import {configureStore} from '@reduxjs/toolkit'
import todoSlices from "@/features/todo.slices";


export const makeStore = () => {
    return configureStore({
        reducer: {
            todos: todoSlices,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']