import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Home.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Product from "../../components/product/Product";
import Kindle from '../../assets/img/kindle.jpg'
import XBox from '../../assets/img/xbox.jpg'
import drillingMachine from '../../assets/img/drilling_machine.jpg'
import echoShow from '../../assets/img/echo_show.jpg'
import fireTv from '../../assets/img/fire_tv_stick.jpg'
import echo from '../../assets/img/echo.jpg'

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
        backgroundImage: `linear-gradient(0deg, rgb(234,237,237),  rgba(255,0,0,0) 40%), url(${slideImages[currentImage]})`,
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
          <Product title='Drilling Machine' price={600} image={drillingMachine} rating={4}/>
          <Product title='XBox' price={3000} image={XBox} rating={5}/>
        </div>
        <div className="home__row">
          <Product title='Echo Show' price={400} image={echoShow} rating={4}/>
          <Product title='Fire TV Stick' price={50} image={fireTv} rating={5}/>
          <Product title='Kindle' price={1200} image={Kindle} rating={3}/>
        </div>
        <div className="home__row">
          <Product title='Echo' price={200} image={echo} rating={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
