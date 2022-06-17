import React, {useState} from 'react'
import '../style/media.css'
import {NavLink} from 'react-router-dom';
import logo from '../images/Logo.png';
import logo2 from '../images/logo2.svg';

const Header = ({isLight,isDisplay}) => {

    const [Light, setIsLight] = useState(false)
    const [display, setDisplay] = useState(false)

return (
    <header className={`header ${isLight ? "header__padding" : "" } ${isDisplay ? "header__none" : ""}`}>
        <div className="header__main container d-flex justify-between align-center">
            <NavLink to="/" className="header__logo">
                <img src={isLight ? logo2 : logo } alt="" className=""/>
            </NavLink>
            <nav class="header__nav d-flex justify-between">
                <div className="header__main-link">
                    <NavLink to="/" className={`header__link ${isLight ? "header__light header__link" : "" }`}>Главная</NavLink>
                </div>
                <div className="header__testdrive-link">
                    <NavLink to="/testdrive" className={`header__link ${isLight ? "header__light" : "" }`}>Тест-драйв</NavLink>
                </div>
                <div className="header__tracking-link">
                    <NavLink to="/tracking" className={`header__link ${isLight ? "header__light" : "" }`}>Трекинг</NavLink>
                </div>
                <div className="header__credit-link">
                    <NavLink to="/credit" className={`header__link ${isLight ? "header__light" : "" }`}>Кредитование</NavLink>
                </div>
                <div className="header__diler-link">
                    <NavLink to="/diler" className={`header__link ${isLight ? "header__light" : "" }`}>Дилерам</NavLink>
                </div>
                <div className="header__company-link">
                    <NavLink to="/about" className={`header__link ${isLight ? "header__light" : "" }`}>О компании</NavLink>
                </div>
            </nav>
        </div>
    </header>
)
}

export default Header