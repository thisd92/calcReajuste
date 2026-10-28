import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reajusteReducer from '../features/calcular/calcularSlice'


export const store = configureStore({
  reducer: {
    reajuste: reajusteReducer,
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
