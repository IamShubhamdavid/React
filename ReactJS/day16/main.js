//import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client"
import stores from "./stores";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";


function App(){

    return(
        <Provider store={stores}>
            <CoinCreate></CoinCreate>
        </Provider>
    )

}

// create AsyncThunk ka jrurat ye pda ki code mein hmein baar multiple code nhi likhna pdega
// Actions ke type mein slicename ya function name use hota tha aur payload arguments keliye  use hota tha


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
