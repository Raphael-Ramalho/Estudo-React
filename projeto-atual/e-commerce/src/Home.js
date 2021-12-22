import React from "react";
import "./Home.css"
import Carousel from "./components/Carousel.jsx";

function Home(){
  return(
    <div className="home">
      <div className="home__container">
        <Carousel/>
      </div>
    </div>
  )
}

export default Home