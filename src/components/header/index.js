import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

const Header = () => {
  return (
    <header className="site-header">
        <h1><Link to='/'>Shawn Rice</Link></h1>

        <p>web developer</p>
    </header>
  );
}

export default Header;