import { createSlice } from "@reduxjs/toolkit";

export const tempUnitSlice = createSlice({
  name: "tempUnit",
  initialState: {
    unit: "imperial",
    symbol: "F",
    speed: "miles/hour",
  },
  reducers: {
    setMetric: (state) => {
      state.unit = "metric";
      state.symbol = "C";
      state.speed = "meters/sec";
    },
    setImperial: (state) => {
      state.unit = "imperial";
      state.symbol = "F";
      state.speed = "miles/hour";
    },
  },
});

export const { setMetric, setImperial } = tempUnitSlice.actions;

export default tempUnitSlice.reducer;
