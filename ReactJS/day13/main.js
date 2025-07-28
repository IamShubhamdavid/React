import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route, Link } from "react-router";
import Home from "./src/home";
import Contact from "./src/contact";
import Dashboard from "./src/dashboard";
import Details from "./src/Details";
import Zero from "./src/zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";
import Github from "./src/Github";


function App(){


    return(
        // <h1>Hello Coder army</h1>
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Details">Details</Link>

        </nav>


        {/* Routes ke bahar wla har page pr visible hoga aur 
        routes ke andar wla ek time par ek hi visible hoga */}
        <Routes>

            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
             <Route path="/Dashboard" element={<Dashboard></Dashboard>} ></Route>

             <Route path="/Details" element={<Details></Details>} >
            <Route index element={<Zero></Zero>}></Route>
            <Route path="Hello" element={<Hello></Hello>}></Route>
            <Route path="Hi" element={<Hi></Hi>}></Route>
            </Route>


            <Route path="/Github/:name" element={<Github></Github>}></Route>
            
        </Routes>
        
        {/* footer section */}
        </BrowserRouter>


    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
