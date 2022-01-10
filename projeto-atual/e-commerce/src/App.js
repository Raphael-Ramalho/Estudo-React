import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    //Bem
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <h1>i am a checkout</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
