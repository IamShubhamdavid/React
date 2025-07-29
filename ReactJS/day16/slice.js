import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

// createAsyncThunk 
// {type:"Coin/fetch",payload:data}
// pending,fullfilled,rejected



const FetchData=createAsyncThunk(

    //Actions : type : payload
    'Coin/fetch',
     
    async(args,thunkAPI)=>{

        try{
            const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)
            const data=await response.json();
            return data;

        }
        catch(error){

            return rejectWithValue(error.message);
        }

    }
)

//Object:{type:'slice/LoadingData',payload:true};
// {type:'slice/UpdateData',payload:data}
// {type:'slice/ErrorData',payload:"Error Occured"};

// Ek aur component ko usko bhi fetch requests:
// Ek aur component bana diya:


const slice=createSlice({
    name:'slice',
    initialState:{data:[],loading:false,error:null},
    reducers:{

        // Increment:(state)=>{state.count++},
        // Decrement:(state)=>{state.count--},
    },
    extraReducers:(builder)=>{

        builder
        .addCase(FetchData.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(FetchData.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(FetchData.rejected, (state,action)=>{
            state.error=action.payload;
            state.loading=false;
        })
    }
})

//type:'slice/Increment'
//type:'slice/Decrement'

// type:"Coin/Fetch/pending"
// type:"Coin/Fetch/fulfilled"
// type:"Coin/Fetch/rejected"

export default slice.reducer;
export {FetchData};


