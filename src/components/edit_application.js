import '../style/categ.css'
import React, {useEffect} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import {NavLink} from "react-router-dom";
import logo from "../images/Logo.svg"

const Edit_application = ({setDisplay}) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    return (
        <div className="edit">
            <header className="admin__header">
                <div className="admin__header-sm ">
                    <img src={logo} alt=""/>
                </div>
                <div className="admin__home d-flex align-center">
                    <h5 className="admin__subtitle ">Главная</h5>
                </div>
                <div className="admin__nav">
                    <p className="admin__text">MENU</p>
                    <NavLink to="/categories" className="admin__block">
                        <h5 className="admin__subtitle">Машины</h5>
                        <p className="admin__desc">Категории</p>
                        <p className="admin__desc">Машины</p>
                    </NavLink>
                    <div className="admin__block">
                        <h5 className="admin__subtitle">Подписки</h5>
                        <p className="admin__desc">Категории</p>
                        <p className="admin__desc">Машины</p>
                    </div>
                    <div className="admin__block">
                        <h5 className="admin__subtitle">Кредитование</h5>
                        <p className="admin__desc">Категории</p>
                        <p className="admin__desc">Машины</p>
                    </div>
                    <div className="admin__block">
                        <h5 className="admin__subtitle">Новости и видео</h5>
                        <p className="admin__desc">Категории</p>
                        <p className="admin__desc">Машины</p>
                    </div>
                    <div className="admin__block">
                        <h5 className="admin__subtitle">Слайдеры</h5>
                        <p className="admin__desc">Категории</p>
                        <p className="admin__desc">Машины</p>
                    </div>
                    <NavLink to="/application" className="admin__block">
                        <h5 className="admin__subtitle">Заявки</h5>

                    </NavLink>
                    <NavLink to="/seo" className="admin__block">
                        <h5 className="admin__subtitle">SEO настройки </h5>

                    </NavLink>


                </div>
            </header>
            <section className="admin__hero">
                <div className="admin__hero_header ">
                    <div className="admin__hero_admin">
                        <a href="#" className="">Admin</a>
                    </div>
                </div>
                <div className="admin__create_block">
                    <h3 className="admin__categories_title">
                        Акматова айбек
                    </h3>
                    <div className="admin__categories_header">
                        <p className="admin__categories_head">Акматова айбек</p>
                        <div className="admin__seo_main">
                            <div className="admin__seo_col d-flex flex-column">
                                <label className="admin__create_label">Статус</label>
                                <input type="text" className="admin__seo_electro car_brand" placeholder=""/>
                                <label className="admin__create_label">Заказ</label>
                                <input type="text" className="admin__seo_electro car_mini_desc" placeholder=""/>
                                <label className="admin__create_label">Имя</label>
                                <input type="text" className="admin__seo_electro car_long_desc" placeholder=""/>
                                <label className="admin__create_label">Телефон</label>
                                <input type="text" className="admin__seo_electro car_wheel_drive" placeholder=" "/>
                                <label className="admin__create_label">Дата тест-драйва</label>
                                <input type="text" className="admin__seo_electro car_range" placeholder=""/>
                                <label className="admin__create_label">Время</label>
                                <input type="text" className="admin__seo_electro car_motor_power" placeholder=""/>

                                <span className="admin__seo_line"></span>
                                <button className="admin__seo_btn">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Edit_application