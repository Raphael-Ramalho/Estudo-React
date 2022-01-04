import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Home.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Product from "../../components/product/Product";

//Caurousel images
import slide1 from "../../assets/img/carousel/61ASx7NHTWL._SX3000_.jpg";
import slide2 from "../../assets/img/carousel/61CX1noQ8nL._SX3000_.jpg";
import slide3 from "../../assets/img/carousel/61DUO0NqyyL._SX3000_.jpg";
import slide4 from "../../assets/img/carousel/71G7vKHnFZL._SX3000_.jpg";
import slide5 from "../../assets/img/carousel/711Y9Al9RNL._SX3000_.jpg";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const slideImages = [slide1, slide2, slide3, slide4, slide5];

  const handleImage = (value) => {
    setCurrentImage(value);
  };

  const previousImage = () => {
    if (currentImage === 0) {
      handleImage(slideImages.length - 1);
    } else {
      handleImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage + 1 === slideImages.length) {
      handleImage(0);
    } else {
      handleImage(currentImage + 1);
    }
  };

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${slideImages[currentImage]})`,
      }}
    >
      <div className="home__container">
        <div className="container">
          <Button
            variant="text"
            className="button"
            onClick={() => previousImage()}
          >
            <ArrowBackIosNewIcon className="icon" />
          </Button>

          <Button variant="text" className="button" onClick={() => nextImage()}>
            <ArrowForwardIosIcon className="icon" />
          </Button>
        </div>
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
