import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //Bem
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/checkout" element={<h1>i am a checkout</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
