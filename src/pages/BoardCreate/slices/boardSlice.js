import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosenView: "Table",

  viewDesc:
    "Table view is your default layout. Plan, track and manage anything using a visual board.",

  viewColor: "",
};

const boardSlice = createSlice({
  initialState,

  name: "board",
  reducers: {
    handleChangeView: (state, action) => {
      state.chosenView = action.payload;
    },

    handleChangeviewDesc: (state, action) => {
      state.viewDesc = action.payload;
    },
    handleChangeViewColor: (state, action) => {
      state.viewColor = action.payload;
    },
handleChangeTaskName :(state,action) =>{

}
  },
});

export const { handleChangeView, handleChangeviewDesc, handleChangeViewColor } =
  boardSlice.actions;

export default boardSlice.reducer;
