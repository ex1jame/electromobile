import React from 'react'
<<<<<<< HEAD
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
                        <NavLink to="#" className="header__link">Трекинг</NavLink>
                    </div>
                    <div className="header__credit-link">
                        <NavLink to="#" className="header__link">Кредитование</NavLink>
                    </div>
                    <div className="header__diler-link">
                        <NavLink to="#" className="header__link">Дилерам</NavLink>
                    </div>
                    <div className="header__company-link">
                        <NavLink to="#" className="header__link">О компании</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
=======
import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.png';

const Header = () => {
	return (
		<header className="header ">
			<div className="header__main container d-flex justify-between align-center">
				<a href="#" className="header__logo">
					<img src={logo} alt="" className="" />
				</a>
				<nav class="header__nav">
					<NavLink to="/" className="header__link">Главная</NavLink>
					<NavLink to="/testdrive" className="header__link">Тест-драйв</NavLink>
					<a href="#" className="header__link">Трекинг</a>
					<a href="#" className="header__link">Кредитование</a>
					<a href="#" className="header__link">Дилерам</a>
					<a href="#" className="header__link">О компании</a>
				</nav>
			</div>
		</header>
	)
>>>>>>> f05341b78b9fe9cf40e9cfdfbebd7c1f42ccb9a3
}

export default Header