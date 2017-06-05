import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1><Link to='/'>Shawn Rice</Link></h1>

        <p>Web Developer</p>
    </header>
  );
}

export default Header;