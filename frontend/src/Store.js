import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/User/UserSlice';
import taskReducer from './features/Tasks/TaskSlices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});
