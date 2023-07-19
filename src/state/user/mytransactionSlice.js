import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet} from '../../utilities/apiCaller';

export const fetchtransactions = createAsyncThunk(
    'doctors/fetchAppointments',
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
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchtransactions.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchtransactions.fulfilled, (state, action) => {
                state.mytransactions = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchtransactions.rejected, (state, action) => {
                state.isLoading = true
                state.mytransactions = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default mytransactionsSlice.reducer;