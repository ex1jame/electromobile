import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../images/Logo.png';
import logo2 from '../images/logo2.svg';
import instagram from "../images/Instagram.svg";
import youtube from "../images/Youtube.svg";
import whatsapp from "../images/Whatsapp.svg";
import telegram from "../images/Telegram.svg";
import { _LINK } from '../data/Data';
import axios from 'axios';
import { useSelector } from 'react-redux';
import whats from '../images/whatsapp.png'

const Header = ({isLight, isDisplay, isBlack}) => {

    const [icons, setIcons] = useState()
    const seo = useSelector(store => store.seo.seo)

    useEffect(() => {
        console.log("seot", seo) 
    }, [seo])

    useEffect(() => {
        const get2 = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/user/socials`
            }
            try {
                const { data } = await axios(config)
                setIcons(data)
            } catch (e) {
                console.log(e)
            }
        }
        get2()
    }, [])

    const [Light, setIsLight] = useState(false)
    const [display, setDisplay] = useState(false)
    const [showBurger, setShowBurger] = useState(false)
    const [Black, setIsBlack] = useState(false)

    const handleBurger = () => {
        setShowBurger(!showBurger)
    }
    return (
        <header className={`header  ${isLight ? "header__padding" : ""}
         ${isBlack ? "header__cars" : ""} ${isDisplay ? "header__none" : ""}`}>
            <div className="header__main container d-flex justify-between align-center">
                <NavLink to="/" className="header__logo">
                    <img src={isLight ? (seo?.logoDarkFile?.name ? `${_LINK}/v1/api/file/${seo?.logoDarkFile?.name}` : logo) : (seo?.logoFile?.name ? `${_LINK}/v1/api/file/${seo?.logoFile?.name}` : logo )} alt="" className=""/>
                </NavLink>
                <nav className="header__nav d-flex justify-between">
                    <div className="header__main-link">
                        <NavLink to="/"
                                 className={`header__link ${isLight ? "header__light header__link" : ""}`}>Главная</NavLink>
                    </div>
                    <div className="header__testdrive-link">
                        <NavLink to="/testdrive"
                                 className={`header__link ${isLight ? "header__light" : ""}`}>Тест-драйв</NavLink>
                    </div>
                    <div className="header__tracking-link">
                        <NavLink to="/tracking"
                                 className={`header__link ${isLight ? "header__light" : ""}`}>Трекинг</NavLink>
                    </div>
                    <div className="header__credit-link">
                        <NavLink to="/credit"
                                 className={`header__link ${isLight ? "header__light" : ""}`}>Кредитование</NavLink>
                    </div>
                    <div className="header__diler-link">
                        <NavLink to="/diler"
                                 className={`header__link ${isLight ? "header__light" : ""}`}>Заказ в Россию</NavLink>
                    </div>
                    <div className="header__company-link">
                        <NavLink to="/about" className={`header__link ${isLight ? "header__light" : ""}`}>
                           O компании</NavLink>
                    </div>
                </nav>
                <div className='header__burger_overlay' onClick={handleBurger}>
               
                <button 
                        className={`header__burger ${showBurger ? "header__burger_active" : ""}${isLight ? "header__nav_light" : ""}`}></button>
                </div>
                {
                    showBurger && (
                        <nav className="header__nav_burger d-flex flex-column">
                            <NavLink to="/" className="header__nav_logo">
                                <img src={isLight ? logo : ""} alt="" className=""/>
                            </NavLink>
                                <NavLink to="/" className="header__nav_link" onClick={showBurger ? "header__burger_active" : ""}>Главная</NavLink>
                                <NavLink to="/testdrive" className="header__nav_link" onClick={showBurger ? "header__burger_active" : ""}>Тест-драйв</NavLink>
                                <NavLink to="/tracking" className="header__nav_link" onClick={showBurger ? "header__burger_active" : ""}>Трекинг</NavLink>
                                <NavLink to="/credit" className="header__nav_link" onClick={showBurger ? "header__burger_active" : ""}>Кредитование</NavLink>
                                <NavLink to="/diler" className="header__nav_link" onClick={showBurger ? "header__burger_active" : ""}>Дилерам </NavLink>
                                <NavLink to="/about" className="header__nav_link" onClick={showBurger ? "header__burger_active" : ""}>О компании</NavLink>

                            <div className="footer__grid">
                                <a href={icons?.inst} className="header__eclipse"><img src={instagram} alt=""/></a>
                                <a href={icons?.youtube} className="header__eclipse"><img src={youtube} alt=""/></a>
                                <a href={icons?.whatsapp} className="header__eclipse"><img src={whatsapp} alt=""/></a>
                                <a href={icons?.telegram} className="header__eclipse"><img src={telegram} alt=""/></a>
                            </div>
                        </nav>
                    )
                }
            </div>
            <a href={icons?.whatsapp} target="_blank" className='whatsapp-ico' >
                <img src={whats} alt=""/>
            </a>
        </header>
    )
}

export default Header