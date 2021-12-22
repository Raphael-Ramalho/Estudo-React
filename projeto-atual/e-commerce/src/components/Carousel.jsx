import React, { useState } from 'react';
import slide1 from '../assets/img/carousel/61ASx7NHTWL._SX3000_.jpg' 
import slide2 from '../assets/img/carousel/61CX1noQ8nL._SX3000_.jpg' 
import slide3 from '../assets/img/carousel/61DUO0NqyyL._SX3000_.jpg' 
import slide4 from '../assets/img/carousel/71G7vKHnFZL._SX3000_.jpg' 
import slide5 from '../assets/img/carousel/711Y9Al9RNL._SX3000_.jpg' 

function Carousel () {
  const [currentImage, setCurrentImage] = useState(0)

  const slideImages = [slide1, slide2, slide3, slide4, slide5]

  const nextImage = () => {
    if(currentImage + 1 === slideImages.length){
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }

  const previousImage = () => {
    if(currentImage === 0){
      setCurrentImage(slideImages.length - 1)
    } else {
      setCurrentImage(currentImage - 1)
    }
  }

  return(
    <div>

      <button
        onClick={()=>previousImage()}
      >Previous</button>

      <button
        onClick={()=>nextImage()}
      >Next</button>

      <img src={slideImages[currentImage]} alt="" />
      
    </div>
  )
}

export default Carousel