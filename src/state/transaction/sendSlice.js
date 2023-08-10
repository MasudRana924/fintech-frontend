import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   type: localStorage.getItem("sendType")
    ? JSON.parse(localStorage.getItem("sendType"))
    : [],
    receiverphone: localStorage.getItem("receiverphone")
    ? JSON.parse(localStorage.getItem("receiverphone"))
    : [],
    // phone:[]
    amount: localStorage.getItem("amount")
    ? JSON.parse(localStorage.getItem("amount"))
    : [],
};

const storeTypeSlice = createSlice({
    name: "send",
    initialState,
    reducers: {
        addPhoneToStore(state, action) {
            state.receiverphone=action.payload;
             localStorage.setItem("receiverphone", JSON.stringify(state.receiverphone));
        },
        addtypeToStore(state, action) {

            state.type=action.payload;
        //    const type=state.type
            localStorage.setItem("sendType", JSON.stringify(state.type));

        },
        addAmountToStore(state, action) {

            state.amount=action.payload;
        //    const type=state.type
            localStorage.setItem("amount", JSON.stringify(state.amount));

        },
        clearStore(state,) {
            state.type = [];
            state.receiverphone = [];

            localStorage.setItem("sendType", JSON.stringify(state.type));
            localStorage.setItem("setPhone", JSON.stringify(state.receiverphone));
        },
    },
});

export const { addPhoneToStore,addtypeToStore,addAmountToStore,  clearStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;