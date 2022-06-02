import React from 'react'
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
}

export default Header