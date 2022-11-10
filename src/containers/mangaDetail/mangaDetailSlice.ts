import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MangaEntry } from '../../services/MangaService';

const mangaDetailSlice = createSlice({
  name: 'MangaDetail',
  initialState: {
    mangaEntry: {
      id: '',
      title: '',
      coverURL: '',
      author: '',
      description: '',
    },
  },
  reducers: {
    // use  redux-create-reducer
    setMangaEntry: (state: any, action: PayloadAction<MangaEntry>) => ({
      ...state,
      mangaEntry: action.payload,
    }),
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = mangaDetailSlice;

// Extract and export each action creator by name
export const { setMangaEntry } = actions;

// Export the reducer, either as a default or named export
export const mangaDetailReducer = reducer;
