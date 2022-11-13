import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/Styles/header.css";
import Logo from "../../Assets/Images/logo.svg";
import navOpenImg from "../../Assets/Images/open-bar.svg";
import navCloseImg from "../../Assets/Images/close-bar.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavBar = () => {
    setOpen(!open);
  };

  return (
    <header>
      <img alt='logo' src={Logo} className='header__logo' />

      <ul className='header__nav'>
        <li>
          <NavLink to='/'> Home </NavLink>
        </li>
        <li>
          <NavLink to='/places'> Place to stay </NavLink>
        </li>
        <li>
          <NavLink to='/'> NFTs </NavLink>
        </li>
        <li>
          <NavLink to='/'> Community </NavLink>
        </li>
      </ul>

      <button className='header__cta'>Connect wallet</button>

      <img
        onClick={handleNavBar}
        src={open ? navCloseImg : navOpenImg}
        alt='mobile menu'
        className='mobile__menu'
      />

      {open && (
        <div className='mobile__menu-dropdown'>
          <ul className='header__nav-mobile'>
            <li>
              <NavLink to='/'> Home </NavLink>
            </li>
            <li>
              <NavLink to='/places'> Place to stay </NavLink>
            </li>
            <li>
              <NavLink to='/'> NFTs </NavLink>
            </li>
            <li>
              <NavLink to='/'> Community </NavLink>
            </li>
          </ul>

          <button className='header__cta-mobile'>Connect wallet</button>
        </div>
      )}
    </header>
  );
}
