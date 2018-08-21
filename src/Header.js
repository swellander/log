import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">CodeLog</a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/new'>Add Task</Link>
        </li>
        <li className="nav-item">
          <Link to='/backlog'>BackLog</Link>
        </li>
     </ul>
    </nav> 
  )
}

export default Header;
