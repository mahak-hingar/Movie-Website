import React from "react";
import Home from "./home";
import Singlemovie from "./singlemovie"; 
import Error from "./Error";
import "./App.css"
import {  Routes , Route } from "react-router-dom";
const App = () => {
  return(
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path ="movie/:id" element={<Singlemovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}
export default App;