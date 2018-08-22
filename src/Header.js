import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = () => {
  const plusStyles = {
    color: 'blue'
  }

  return (
    <nav className="nav-fill navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-swatchbook"></i>og
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/new"><i style={plusStyles} className="fas fa-plus"></i></Link>
        </li>
      </ul>
      <ul className="nav navbar-nav" style={{float:'right'}}>
        <h3 >{ moment().format('dddd, MMMM Do') }</h3>
      </ul>
    </nav> 
  )
}

export default Header;
