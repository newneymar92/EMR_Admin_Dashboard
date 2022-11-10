import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'camera',
  initialState: {
    loading: false,
    cameraList: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { setLoading } = slice.actions;

// Get value from state
export const cameraStore = (state) => state.camera;

export default slice.reducer;
