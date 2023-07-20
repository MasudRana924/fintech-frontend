import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet} from '../../utilities/apiCaller';

export const fetchtransactions = createAsyncThunk(
    'fetchtransactions ',
    async ({userToken}, { rejectWithValue }) => {
        const transactions = await privateGet('/my/transactions',userToken);
        return transactions;
    }
);
export const mytransactionsSlice = createSlice({
    name: 'My transactions',
    initialState:{
        mytransactions: [],
        isLoading: false,
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchtransactions.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchtransactions.fulfilled, (state, action) => {
                state.mytransactions = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchtransactions.rejected, (state, action) => {
                state.isLoading = true
                state.mytransactions = [];
               
            })
    }
});

export default mytransactionsSlice.reducer;