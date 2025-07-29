import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import { Provider } from "react-redux";
import stores from "./Stores";


function App(){

    //console.log(reactslicer);

    return(
        <Provider store={stores}>

            <Header></Header>
            <Card></Card>
        
        </Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
