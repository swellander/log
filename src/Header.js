import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav-fill navbar navbar-expand-lg navbar-light bg-light">
     <a className="navbar-brand" href="#">CodeLog</a>
     <h3>{ moment().format('dddd, MMMM Do') }</h3>
    </nav> 
  )
}

export default Header;
