import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function HeaderComponent() {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='header'>
      HeaderComponent
      {darkMode ? (
        <button className='toggleBtn' onClick={toggleDarkMode}>🌛</button>) :
        (
          <button className='toggleBtn' onClick={toggleDarkMode}>☀️</button>
        )}
    </div>
  )
}

export default HeaderComponent