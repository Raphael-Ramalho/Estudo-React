import React from "react";
import { Button } from "@mui/material";
import "./Carousel.css";


import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel({slideImages, currentImage, handleImage}) {

  const nextImage = () => {
    if (currentImage + 1 === slideImages.length) {
      handleImage(0);
    } else {
      handleImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      handleImage(slideImages.length - 1);
    } else {
      handleImage(currentImage - 1);
    }
  };

  return (
    <div
      className="container"
    >
      <Button variant="text" className="button" onClick={() => previousImage()}>
        <ArrowBackIosNewIcon className="icon" />
      </Button>

      <Button variant="text" className="button" onClick={() => nextImage()}>
        <ArrowForwardIosIcon className="icon" />
      </Button>
    </div>
  );
}

export default Carousel;
