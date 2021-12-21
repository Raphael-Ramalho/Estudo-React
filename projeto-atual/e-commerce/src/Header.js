import React from 'react';
import './Header.css'
import Logo from "./assets/img/amazon-logo.JPG"

function Header () {
  return(
    <div>
      <img src={Logo} alt="Amazon logo"/> 
    </div>
  )
}

export default Header