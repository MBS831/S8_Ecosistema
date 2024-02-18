import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    variationExpenses : 0
}

export const fetchData = createAsyncThunk(
    'expenses/fetchData',
    async () => {
        try {
            const response = await fetch("http://localhost:3000/expenses/1");
            const data = await response.json();
            const numbers = []
            
            for(const day in data.week){
                if(!isNaN(parseInt(data.week[day]))){
                    numbers.push(parseInt(data.week[day]))
                }
            }
            console.log(numbers)
            const comparation = (numbers[1] - numbers[0]) / ((numbers[1] + numbers[0]) / 2) * 100;
            const total = parseFloat(comparation.toFixed(2));;
            console.log(total)
            return total;
        } catch (error) {
            console.error("Error fetching graphic:", error);
            throw error;
        }
    }
);

const variationExpensesSlice = createSlice({
    name: 'variationExpenses',
    initialState,
    reducers: {
        addVariation: (state, action) => {
            state.variationExpenses = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.variationExpenses = action.payload
        });
      }
})


export default variationExpensesSlice.reducer