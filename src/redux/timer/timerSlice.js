import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  timer: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState: INITAL_STATE,
  reducers: {
    incrementTimer(state) {
      state.timer += 1;
    },
    clearTimer() {
      return INITAL_STATE;
    },
  },
});

export const { incrementTimer, clearTimer } = timerSlice.actions;

export const timerReducer = timerSlice.reducer;
