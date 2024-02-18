import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    graphicExpenses: [] as any[]
}

export const fetchGraphic = createAsyncThunk(
    'expenses/fetchGraphic',
    async () => {
        try {
            const response = await fetch("http://localhost:3000/expenses/1");
            const data = await response.json();
            const days = Object.values(data.week);
            return days;
        } catch (error) {
            console.error("Error fetching graphic:", error);
            throw error;
        }
    }
);

const graphicExpensesSlice = createSlice({
    name: 'graphics',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGraphic.fulfilled, (state, action) => {
            state.graphicExpenses = action.payload
        });
      }
    });


export default graphicExpensesSlice.reducer