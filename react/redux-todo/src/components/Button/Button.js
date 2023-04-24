import React from 'react'
import classes from './Button.module.css';

function Button({ text, type }) {
  return (
    <button className={classes.button} type={type}>{text}</button>
  )
}

export default Button