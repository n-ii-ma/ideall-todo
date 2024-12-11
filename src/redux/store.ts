import { configureStore } from '@reduxjs/toolkit';

import todosSliceReducer from './features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
