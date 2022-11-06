import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    rightToLeft: true,
  },
  reducers: {
    toggleRightToLeft: (state) => ({
      ...state,
      rightToLeft: !state.rightToLeft,
    }),
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = settingsSlice;

// Extract and export each action creator by name
export const { toggleRightToLeft } = actions;

// Export the reducer, either as a default or named export
export const settingsReducer = reducer;
