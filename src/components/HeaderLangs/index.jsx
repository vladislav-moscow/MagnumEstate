import React from 'react';

import './HeaderLangs.css';

function HeaderLangs() {
  return (
    <div className='header__langs flex'>
      <a href='/' className='active'>RU</a>
      <a href='en'>EN</a>
    </div>
  );
}

export default HeaderLangs;