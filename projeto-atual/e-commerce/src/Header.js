import React from "react";
import "./Header.css";
import Logo from "./assets/img/amazon-logo.JPG";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Amazon logo" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">HelloGuest</span>
          <span className="header__optionLineTwo">SignInt</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
          <span className="header__optionLineTwo">22997654340</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon/>
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
