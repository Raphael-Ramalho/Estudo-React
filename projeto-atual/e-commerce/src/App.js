import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import Home from "./pages/home/Home"


function App() {
  return (
    //Bem
    <div className="App">
      <Header/>
      <Home/>
      {/* Home */}
    </div>
  );
}

export default App;