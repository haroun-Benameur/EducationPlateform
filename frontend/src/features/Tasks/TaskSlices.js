import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const taskSlice = createSlice({
  name: 'task',
  initialState: { tasks: [] },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = taskSlice.actions;

export const fetchTasks = () => async (dispatch) => {
  const response = await axios.get('/api/tasks/');
  dispatch(setTasks(response.data));
};

export default taskSlice.reducer;
