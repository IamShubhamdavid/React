import {configureStore} from '@reduxjs/toolkit'

import sliceReducer from "./slice"


const stores=configureStore({

    reducer:{
        slice: sliceReducer,
    }
})
export default stores;


