import React, { useState } from "react";
import "./Home.css"
import Carousel from "./components/Carousel.jsx";

import slide1 from "./assets/img/carousel/61ASx7NHTWL._SX3000_.jpg";
import slide2 from "./assets/img/carousel/61CX1noQ8nL._SX3000_.jpg";
import slide3 from "./assets/img/carousel/61DUO0NqyyL._SX3000_.jpg";
import slide4 from "./assets/img/carousel/71G7vKHnFZL._SX3000_.jpg";
import slide5 from "./assets/img/carousel/711Y9Al9RNL._SX3000_.jpg";

function Home(){

  const [currentImage, setCurrentImage] = useState(0);

  const slideImages = [slide1, slide2, slide3, slide4, slide5];

  const handleImage = (value) => {
    setCurrentImage(value)
  }

  return(
    <div className="home">
      <div className="home__container" style={{
        backgroundImage: `url(${slideImages[currentImage]})`
      }}>
        <Carousel slideImages={slideImages} currentImage={currentImage} handleImage={handleImage}/>
      </div>
    </div>
  )
}

export default Home