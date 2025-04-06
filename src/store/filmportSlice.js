import { createSlice } from "@reduxjs/toolkit";

export const filmportSlice = createSlice({
  name: "film",
  initialState: {
    bannerData: [],
    imageUrl: "",
  },
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setBannerData, setImageUrl } = filmportSlice.actions;

export default filmportSlice.reducer;
