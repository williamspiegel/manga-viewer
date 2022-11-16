import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const mangaViewerSlice = createSlice({
  name: 'mangaViewer',
  initialState: {
    chapterId: '',
  },
  reducers: {
    setChapterId: (state: any, action: PayloadAction<string>) => ({
      ...state,
      chapterId: action.payload,
    }),
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = mangaViewerSlice;

// Extract and export each action creator by name
export const { setChapterId } = actions;

// Export the reducer, either as a default or named export
export const mangaViewerReducer = reducer;
