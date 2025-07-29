import { createSlice } from "@reduxjs/toolkit";

const initialState={count:0}

//Immer. behind the scene draft ko update krta or kaam krta hai state.count ke liye spread operator 
const reactslicer=createSlice({

    name:"slice1",
    initialState:{count:0},
    reducers:{
        Increment:(state)=> {state.count = state.count+1},
        Decrement:(state)=> {state.count = state.count-1},
        Reset:(state)=>{state.count = 0},
        CustomerIncreser:(state,actions)=>{state.count+=actions.payload}

    }

})

export const {Increment,Decrement,Reset,CustomerIncreaser}= reactslicer.actions
//actions ka use ye h ki jab bhi hm dispatch krte h ki hme iss function ko exceute krna h wo mere store ke pass jata h  
// aur bolta h ki ye kis slice ka part h normal fun ction nhi kr skta h isliye actions ko use krte h 


export {reactslicer};

 export default reactslicer.reducer;
