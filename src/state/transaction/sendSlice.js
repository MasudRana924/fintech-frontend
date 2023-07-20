import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   type: localStorage.getItem("sendType")
    ? JSON.parse(localStorage.getItem("sendType"))
    : [],
    phone: localStorage.getItem("setPhone")
    ? JSON.parse(localStorage.getItem("setPhone"))
    : [],
    // phone:[]
};

const storeTypeSlice = createSlice({
    name: "send",
    initialState,
    reducers: {
        addPhoneToStore(state, action) {
            state.phone=action.payload;
             localStorage.setItem("setPhone", JSON.stringify(state.phone));
        },
        addtypeToStore(state, action) {

            state.type=action.payload;
        //    const type=state.type
            localStorage.setItem("sendType", JSON.stringify(state.type));

        },
        clearStore(state,) {
            state.type = [];
            state.phone = [];

            localStorage.setItem("sendType", JSON.stringify(state.type));
            localStorage.setItem("setPhone", JSON.stringify(state.phone));
        },
    },
});

export const { addPhoneToStore,addtypeToStore,  clearStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;