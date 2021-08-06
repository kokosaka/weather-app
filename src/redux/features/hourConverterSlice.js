import { createSlice } from "@reduxjs/toolkit";

export const hourConverterSlice = createSlice({
  name: "hourConvert",
  initialState: {
    unit: "twelve",
  },
  reducers: {
    setFull: (state) => {
      state.unit = "twentyFour";
    },
    setHalf: (state) => {
      state.unit = "twelve";
    },
  },
});

export const { setFull, setHalf } = hourConverterSlice.actions;

export default hourConverterSlice.reducer;
