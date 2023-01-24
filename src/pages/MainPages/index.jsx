import React from 'react'
import './MainPages.css';

function MainPages() {
  return (
    <>
      <main className='content'>
        <div className="bannerbg">
          <img src="img/banner-full.jpg" alt="Baner" className='bannerbg__img pc' />
          <img src="img/banner-mob.jpg" alt="Baner" className='bannerbg__img mob'/>
          <section className="banner">
            <div className="wrapper">
              <div className="banner__box">
                <p className="banner__subtitle fade_in delay2">ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ</p>
                <h1 className="banner__title fade_in delay4">НА Острове БАЛИ</h1>
                <p className="banner__text fade_in delay6">Продажа премиальных вилл и апартаментов для жизни и инвестиций</p>
                <div className="centerbtn">
                  <button className="btn banner__btn">Скачать презентацию</button>
                </div>
              </div>
              <div className="banner__advas">
                <img src="img/line.png" alt="line" className='banner__line'/>
                <div className="banner__adva banner__adva_1 animate_fade_left_sm delay2 fade_left_sm">Стоимость от $175 000</div>
                <div className="banner__adva banner__adva_2 big animate_fade_left_sm delay4 fade_left_sm">0% Рассрочка</div>
                <div className="banner__adva banner__adva_3 animate_fade_left_sm delay6 fade_left_sm">11-15% Годовых</div>
              </div>
              <a href="#about" className="banner__more anchor">
                <img src="img/more.png" alt="more" />
              </a>
            </div>
          </section>
          <section className='' id='about'></section>
        </div>
      </main>
    </>
  )
}

export default MainPages