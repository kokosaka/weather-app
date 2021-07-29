import { createSlice } from "@reduxjs/toolkit";

export const getLocationSlice = createSlice({
  name: "getLocation",
  initialState: {
    lon: 0,
    lat: 0,
  },
  reducers: {
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLon: (state, action) => {
      state.lon = action.payload;
    },
  },
});

export const { setLat, setLon } = getLocationSlice.actions;

export default getLocationSlice.reducer;
