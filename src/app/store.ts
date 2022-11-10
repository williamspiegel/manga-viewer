import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { mangaDetailReducer } from '../containers/mangaDetail/mangaDetailSlice';
import { settingsReducer } from '../containers/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    mangaDetail: mangaDetailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
