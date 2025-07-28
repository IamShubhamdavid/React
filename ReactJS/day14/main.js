import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";

function App(){


    return(
        <>
        <Provider store={stores}>
            <Counting></Counting>
            </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
