import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import FooterComponent from './FooterComponent'
import './HomeComponent.css'

function HomeComponent() {
  const data = useContext(ThemeContext)
  console.log(data)

  const theme = {
    background: data.darkMode ? "black" : "white",
    color: data.darkMode ? "white" : "black",
  }

  return (
    <div className='container' style={theme}>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export default HomeComponent