import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../utilities/apiCaller";



const initialState={
    updateName:[],
    isLoading:false,
    isError:false,
    error:'',
    success:false
}

export const updateName = createAsyncThunk(
    'user/updateName',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const updateprofile = await privatePut('/update/user', userToken, data);
            return updateprofile;
        }catch(err){
            return rejectWithValue(err);
        }
   
    });

const updateProfileSlice=createSlice({
    name:'updateName',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(updateName.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(updateName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updateName=action.payload;
                state.success=true
            })
            .addCase(updateName.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
            
           
    }
});
export default updateProfileSlice.reducer; 