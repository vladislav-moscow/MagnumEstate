import React from 'react';
import HeaderLangs from '../HeaderLangs';
import MainNavigation from '../MainNavigation';
import RingBtn from '../RingBtn';

import './Header.css';

function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className='header__box flex'>
            <MainNavigation/>
            <HeaderLangs/>
            <RingBtn/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;