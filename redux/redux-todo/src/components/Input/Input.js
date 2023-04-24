import React from 'react'
import classes from "./Input.module.css"

function Input({ value, type, placeholder, getTodo }) {
  return (
    <div>
      <input className={classes.input} value={value} type={type} placeholder={placeholder} onChange={(e) => getTodo(e.target.value)} />
    </div>
  )

}


export default Input