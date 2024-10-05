import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const todoSlices = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      state.push({
        id: Date.now().toString(),
        text: action.payload.text,
        completed: false
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      return state.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      return state.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    }
  }
})
