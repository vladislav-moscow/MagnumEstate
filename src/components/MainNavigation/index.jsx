import React from 'react';

import './MainNavigation.css';

function MainNavigation() {
  return (
    <>
      <a href='index.html' className='header__logo'><img src="img/logo.png" alt="Логотип" /></a>
      <nav className='header__nav'>
        <ul className='flex'>
          <li> <a href="#about" className='anchor'>О Бали</a></li>
          <li> <a href="#proe" className='anchor'>Проекты</a></li>
          <li> <a href="#special" className='anchor'>Условия для инвестора</a></li>
          <li> <a href="#abus" className='anchor'>Виллы</a></li>
          <li> <a href="#abus" className='anchor'>Апартаменты</a></li>
        </ul>
      </nav>
    </>
  );
}

export default MainNavigation;