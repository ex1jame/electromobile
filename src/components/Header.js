import React from 'react'

import {NavLink} from 'react-router-dom';
import logo from '../images/Logo.png';

const Header = () => {
    return (
        <header className="header ">
            <div className="header__main container d-flex justify-between align-center">
                <NavLink to="/" className="header__logo">
                    <img src={logo} alt="" className=""/>
                </NavLink>
                <nav class="header__nav d-flex justify-between">
                    <div className="header__main-link">
                        <NavLink to="/" className="header__link">Главная</NavLink>
                    </div>
                    <div className="header__testdrive-link">
                        <NavLink to="/testdrive" className="header__link">Тест-драйв</NavLink>
                    </div>
                    <div className="header__tracking-link">
                        <NavLink to="/tracking" className="header__link">Трекинг</NavLink>
                    </div>
                    <div className="header__credit-link">
                        <NavLink to="/credit" className="header__link">Кредитование</NavLink>
                    </div>
                    <div className="header__diler-link">
                        <NavLink to="/diler" className="header__link">Дилерам</NavLink>
                    </div>
                    <div className="header__company-link">
                        <NavLink to="/about" className="header__link">О компании</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )

}

export default Header