/** @format */
'use client';
import { createSlice } from '@reduxjs/toolkit';
import { Counter } from '../../types/counterType';

const initialState: Counter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const getCount = (state: Counter): number => state.counter.count;
export default counterSlice.reducer;
