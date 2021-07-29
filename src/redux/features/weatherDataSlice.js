import { createSlice } from "@reduxjs/toolkit";

export const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {},
  reducers: {
    setWeatherData: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setWeatherData } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
