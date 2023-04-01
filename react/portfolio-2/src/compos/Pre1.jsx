import React from 'react'

function Pre1(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}></div>
  )
}

export default Pre1