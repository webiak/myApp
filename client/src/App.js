import React from "react";
import {  BrowserRouter,Routes,  Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Parts/Navbar";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import LogIn from "./Pages/LogIn";
import Rules from "./Pages/Rules";
import Galeria from "./Pages/Galeria";

function App() {
  return (
    
         
    <BrowserRouter>
        
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='/galery' element={<Galeria/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/rules' element={<Rules/>} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;