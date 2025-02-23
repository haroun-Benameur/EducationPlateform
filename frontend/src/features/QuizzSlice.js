import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const fetchQuizzes = createAsyncThunk("quiz/fetchQuizzes", async () => {
    const response = await axios.get(`${API_URL}/quizzes/`);
    return response.data;
});

export const fetchMazes = createAsyncThunk("maze/fetchMazes", async () => {
    const response = await axios.get(`${API_URL}/mazes/`);
    return response.data;
});

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        quizzes: [],
        mazes: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuizzes.pending, (state) => { state.loading = true; })
            .addCase(fetchQuizzes.fulfilled, (state, action) => {
                state.loading = false;
                state.quizzes = action.payload;
            })
            .addCase(fetchQuizzes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchMazes.pending, (state) => { state.loading = true; })
            .addCase(fetchMazes.fulfilled, (state, action) => {
                state.loading = false;
                state.mazes = action.payload;
            })
            .addCase(fetchMazes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default quizSlice.reducer;
