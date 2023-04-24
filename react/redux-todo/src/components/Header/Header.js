import React from 'react'
import classes from "./Header.module.css"
function Header({ title }) {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.header__title}>{title}</h1>
      </header>
    </div>
  )
}

export default Header