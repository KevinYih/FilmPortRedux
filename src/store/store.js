// src/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import filmportReducer from './filmportSlice'

export default configureStore({
  reducer: {
    filmData: filmportReducer,
  },
})