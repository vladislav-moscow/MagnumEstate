import React from 'react';
import MainNavigation from '../MainNavigation';

import './header.css';

function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <MainNavigation/>

          
        </div>
      </header>
    </>
  );
}

export default Header;