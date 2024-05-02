/** @format */
'use client';

import { createSlice } from '@reduxjs/toolkit';
import { Todos } from '@/app/types/inputType';

const initialState: Todos = {
  todos: [],
};

console.log(initialState.todos,"initialState");

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        isChecked: false,
      };
      state.todos = [...state.todos, newTodo];
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      //Not Clear 
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export const todoList = (state: { [x: string]: any; todos: Todos }) =>
  state.todo;

export default todoSlice.reducer;
