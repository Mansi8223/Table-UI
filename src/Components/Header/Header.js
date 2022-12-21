import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className="header">
      <img className="logo" src="/asset/Amazon_logo.svg.webp" alt='logo'/>
      <div className="header-right">
        <div>
          <PersonIcon/>
          Account
        </div>
        <div>
          <ShoppingCartIcon/>
          Cart
        </div>
      </div>
    </div>
  )
}

export default Header