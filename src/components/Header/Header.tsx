import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header-bar d-f jc-sb align-center container-m">
        <nav>
          <ul className="header-nav d-f">
            <li><a href="">Про нас</a></li>
            <li><a href="">Оплата</a></li>
            <li><a href="">Доставка та збірка</a></li>
            <li><a href="">Відгуки</a></li>
            <li><a href="">Блог</a></li>
            <li><a href="">Контакти</a></li>
          </ul>
        </nav>
        <div className='d-f align-center'>
          <div className="header-help d-f align-center">
            <div className="header-help-title">Допомога і консультація:</div>
            <div className="header-social d-f">
              <div><img src="/images/header-social1.png" alt="header-social1" /></div>
              <div><img src="/images/header-social2.png" alt="header-social2" /></div>
              <div><img src="/images/header-social3.png" alt="header-social3" /></div>
            </div>
          </div>
          <form action="" className="header-language-fm">
            <select name="languageChoise">
              <option value="0">UA</option>
              <option value="1">USA</option>
            </select>
          </form>
        </div>
      </div>
      <div className="header-main d-f jc-sb container-p">
        <div><Link to="/"><img src="/images/logo-header.svg" alt="logo-header" /></Link></div>
        <Link to="/catalog" className="header-catalog-link">Каталог</Link>
        <form action="" className='header-search-fm d-f align-center'>
          <input type="text" name='searchQuery' placeholder='Пошук товарів' />
          <button type="button" className='btn-clear'><img src="/images/search.svg" alt="search" /></button>
        </form>
        <div className="header-phone d-f align-center" >
          <div><img src="/images/icon-tel.png" alt="icon-tel" /></div>
          <div className="header-phone-info">
            <div className="header-phone-desc">Щодня з 9:00 до 18:00</div>
            <h4 className="header-phone-number">067 929-45-45</h4>
          </div>
          <button
            className='btn-clear d-b'
          >
            <img src="/images/arrow.png" alt="arrow" />
          </button>
          <div className='header-about d-f'>
            <div className="pos-r">
              <div><img src="/images/obrane.png" alt="obrane" /></div>
              <div className="header-favor-count">1</div>
            </div>
            <div className="pos-r">
              <div><img src="/images/korzina.png" alt="korzina" /></div>
              <div className="header-cart-count">1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu d-f jc-sb align-center container-p">
        <ul className="header-menu-list d-f">
          <li><a href="">Акції</a></li>
          <li><a href="">Розпродаж</a></li>
          <li><a href="">Купити в кредит</a></li>
        </ul>
        <ul className="header-menu-rooms d-f">
          <li><a href="">Дитяча</a></li>
          <li><a href="">Кухня</a></li>
          <li><a href="">Ванна</a></li>
          <li><a href="">Спальня</a></li>
          <li><a href="">Передпокій</a></li>
          <li><a href="">Вітальня</a></li>
          <li><a href="">Офіс</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header