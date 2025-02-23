import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/User/UserSlice';
import taskReducer  from './features/Tasks/TaskSlices'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,

  },
});