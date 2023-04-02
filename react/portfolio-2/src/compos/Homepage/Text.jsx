import React from 'react'
import Typewriter from "typewriter-effect";
import "../../pages/style.css";
function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "React JS Developer",
          "FrontEnd Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }} />
  )
}

export default Text