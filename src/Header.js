import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">CodeLog</a>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/new'>Add Task</Link></li>
      </ul>
    </nav> 
  )
}

export default Header;
