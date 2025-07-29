import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";
import { reactslicer } from "./Slice1";
import CustomCounter from "./CustomCounter";


function App(){

    console.log(reactslicer);

    return(
        <>
        <Provider store={stores}>
            <Counting></Counting>
            <br></br>
            <br></br>
            <br></br>
            <CustomCounter></CustomCounter>
            </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
