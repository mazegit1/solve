// Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"; // Adjusted the path

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
