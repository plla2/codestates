import React from 'react'
import logo from '../images/logo2.png'
import classes from "./Header.module.css";
import Menu from './Menu';
function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["header__logo"]}>
        <img src={logo} alt="" />
      </div>
      <div className={classes["header__line"]}></div>
      <nav className={classes["header__nav"]}>
        <Menu />
      </nav>
    </header>
  )
}

export default Header