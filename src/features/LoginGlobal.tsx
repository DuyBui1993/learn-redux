import {createSlice} from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('status', JSON.stringify(state.isLoggedIn));
        console.log('localStorage.getItem(\'status\'))', localStorage.getItem('status'));
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: typeof window !== 'undefined' && JSON.parse(localStorage.getItem('status')) || false,
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            saveToLocalStorage(state);
            console.log('state.isLoggedIn ', state.isLoggedIn)
        },
        logout: (state) => {
            state.isLoggedIn = false;
            saveToLocalStorage(state);
            console.log('state.isLoggedIn ', state.isLoggedIn)
        },
    },
});
