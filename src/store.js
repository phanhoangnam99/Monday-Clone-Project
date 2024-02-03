import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./pages/BoardCreate/slices/boardSlice";

const store = configureStore({
  reducer: {
    board: boardSlice,
  },
});

export default store;
