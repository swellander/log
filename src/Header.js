import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = () => {
  const plusStyles = {
    color: 'blue'
  }

  return (
    <nav className="nav-fill navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/"><a className="navbar-brand" href="#">CodeLog</a></Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/new"><i style={plusStyles} className="fas fa-plus"></i></Link>
        </li>
      </ul>
     <h3>{ moment().format('dddd, MMMM Do') }</h3>
    </nav> 
  )
}

export default Header;
