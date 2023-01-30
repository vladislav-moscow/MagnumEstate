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
          <section className='adbox' id='about'>
            <div className="wrapper">
              <div className="adbox__box flex">
                <div className="adbox__left"></div>
                <div className="adbox__info">
                  <h2 className='adbox__title animate_fade_in delay2 fade_in'>Бали</h2>
                  <p className="adbox__text"><b>Cамое желанное </b>
                    туристическое направление в мире по версии многих авторитетных порталов.<br />
                    С каждым годом райский остров стремительно набирает еще большую популярность 
                    среди туристов и экспатов, что выводит его в мировой ТОП по инвестиционной 
                    привлекательности.
                  </p>
                  <p className="adbox__text"><b>На Бали созданы все условия для жизни, отдыха и бизнеса.</b></p>
                  <div className="adbox__btns flex">
                    <button className='btn2 adbox__btn adbox__btn_1' href='#mprice'>Скачать презентацию</button>
                    <button className='btn3 adbox__btn adbox__btn_2' href='#popup'>Заказать звонок</button>
                  </div>
                  <div className="adbox__sales flex">
                    <div className="adbox__sale flex">
                      <span className='animate_fade_in delay2 fade_in'>12-15%</span>
                      <p>Средняя <br /> доходность в год</p>
                    </div>
                    <div className="adbox__sale flex">
                      <span className='animate_fade_in delay4 fade_in'>80%</span>
                      <p>Средняя заполняемость  <br /> недвижимости в год</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="proe" id="proe">
            <div className="wrapper">
              <div className="proe__heading flex">
                <img src="img/logo-gray.png" alt="logo" className='proe__logo' />
                <div className="proe__hright">
                  <div className="proe__title">
                    <span className='animate_fade_in delay2 fade_in'>ОТКРОЙТЕ</span>

                  </div>
                  <p className="proe__htext">Для себя мир <b>премиальной недвижимости</b><br />
                    На главном мировом курорте о.Бали от девелопера
                    <b>Magnum Estate</b>
                  </p>
                </div>
              </div>
              <div className="proe__box flex">
                <a href="#" className="proe__item big">
                  <div className="proe__image proe__image-1"></div>
                  <div className="proe__info">
                    <span className="proe__name">The Umalas Signature</span>
                    <p className="proe__price">от $175 000</p>
                    <p className="proe__text">Самый современный и технологичный комплекс апартаментов в 
                      главной туристической локации о. Бали
                    </p>
                    <span className="proe__more">
                      <img src="img/more2.png" alt="подробнее" />
                    </span>
                  </div>
                </a>
                <a href="#" className="proe__item">
                  <div className="proe__image proe__image-2"></div>
                  <div className="proe__info">
                    <span className="proe__name">Sky Stars Ocean View</span>
                    <p className="proe__price">от $360 000</p>
                    <p className="proe__text">Уникальные настоящие Luxury виллы в калифорнийском стиле с видом на океан</p>
                    <span className="proe__more">
                      <img src="img/more2.png" alt="подробнее" />
                    </span>
                  </div>
                </a>
                <a href="#" className="proe__item">
                  <div className="proe__image proe__image-3"></div>
                  <div className="proe__info">
                    <span className="proe__name">Sky Stars Luxury Villas</span>
                    <p className="proe__price">от $740 000</p>
                    <p className="proe__text">Роскошные виллы расположенные в закрытой резиденции привилегированного района Бали</p>
                    <span className="proe__more">
                      <img src="img/more2.png" alt="подробнее" />
                    </span>
                  </div>
                </a>
                <a href="#" className="proe__item big">
                  <div className="proe__image proe__image-4"></div>
                  <div className="proe__info">
                    <span className="proe__name">Sky Stars Royal Villas</span>
                    <p className="proe__price">от $1 690 000</p>
                    <p className="proe__text">Феноменальная роскошь, новый стандарт премиум недвижимости на о.Бали. 
                      Luxury виллы в закрытой резиденции.
                    </p>
                    <span className="proe__more">
                      <img src="img/more2.png" alt="подробнее" />
                    </span>
                  </div>
                </a>
                <a href="#" className="proe__item big">
                  <div className="proe__image proe__image-5"></div>
                  <div className="proe__info">
                    <span className="proe__name">Magnum&nbsp;Residence Sanur</span>
                    <p className="proe__price">от $490 000</p>
                    <p className="proe__text">Первый ROYAL комплекс апартаментов на берегу океана о.Бали.
                      Проект с непревзойденной роскошью и удобствами
                    </p>
                    <span className="proe__more">
                      <img src="img/more2.png" alt="подробнее" />
                    </span>
                  </div>
                </a>
                <a href="#" className="proe__item">
                  <div className="proe__image proe__image-6"></div>
                  <div className="proe__info">
                    <span className="proe__name">Alam Villas</span>
                    <p className="proe__price">от $575 000</p>
                    <p className="proe__text">Комплекс премиальных вилл для жизни и инвестиций в 
                      главной туристической локации Бали - районе Умалас
                    </p>
                    <span className="proe__more">
                      <img src="img/more2.png" alt="подробнее" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default MainPages