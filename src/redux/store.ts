import { configureStore, combineReducers } from '@reduxjs/toolkit';
import formReducer from './formSlice';

// Combine reducers
const rootReducer = combineReducers({
  formData: formReducer, // Your form slice reducer
});

// Configure store without persistence
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {

      },
    }),
});

// Define and export RootState type
export type RootState = ReturnType<typeof store.getState>;
