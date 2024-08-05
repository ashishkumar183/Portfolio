import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Ashish</a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-bag nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#project" className="nav__link">
                <i className="uil uil-folder-open nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-phone nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
