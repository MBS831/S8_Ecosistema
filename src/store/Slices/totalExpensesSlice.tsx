import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTotalExpenses = createAsyncThunk(
  'expenses/fetchTotal',
  async () => {
    const response = await fetch("http://localhost:3000/expenses/1");
    const data = await response.json();
    const suma = Object.values<number>(data.week).reduce((a: number, b: number) => a + b, 0);
    return suma;
  }
);

interface TotalExpensesState {
  totalExpenses: number | null;
}

const initialState: TotalExpensesState = {
  totalExpenses: null
};

const totalExpensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTotalExpenses.fulfilled, (state, action) => {
        state.totalExpenses = action.payload;
    });
  }
});

export default totalExpensesSlice.reducer;