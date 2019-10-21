import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>buy-list</h1>
      <Link style={linkStyle} to="/"> Search </Link>|
      <Link style={linkStyle} to='/list'> List </Link>|
      <Link style={linkStyle} to='/about'> About </Link>
    </header>
  )
}

const linkStyle = {
  color: "rgb(1, 189, 166)",
  textDecoration: 'none'
}

const headerStyle = {
  background: '#333',
  textAlign: 'center',
  padding: '10px',
  fontFamily: "monospace",
  color: "hotpink"
}

export default Header