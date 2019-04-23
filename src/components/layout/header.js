import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header style={headerStyle}>
    <h1>Todo List</h1>
    <Link style={linkStyle} to="/">
      Home
    </Link>
    <Link style={linkStyle} to="/about">
      About
    </Link>
    <Link style={linkStyle} to="/new-todo">
      Add Todo
    </Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  padding: '5px'
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}

export default Header
