'use client'
import { combineReducers } from "@reduxjs/toolkit";
import  counterSlice  from "./counterSlice";
import todoSlice from "./todoSlice";



const rootReducer = combineReducers({
  counter :counterSlice,
  todo: todoSlice
})


export default rootReducer;