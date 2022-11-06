import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { settingsReducer } from '../containers/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
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
