import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
//import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
