import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <Link to="/">
        <h1>Title과 Navbar가 들어갈 헤더!!!</h1>
      </Link>
    </>
  )
}

export default Header;

