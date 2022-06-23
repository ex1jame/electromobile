import '../style/categ.css'
import React, {useEffect} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import {NavLink} from "react-router-dom";
import logo from "../images/Logo.svg"

const Seo = ({setDisplay}) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    return (
        <div className="admin">
            <header className="admin__header">
                <div className="admin__header-sm">
                    <img src={logo} alt=""/>
                </div>
                <div className="admin__home d-flex align-center">
                    <h5 className="admin__subtitle ">Главная</h5>
                </div>
                <div className="admin__nav">
                    <p className="admin__text">MENU</p>
                    <div className="admin__block">
                        <h5 className="admin__subtitle">Машины</h5>
                        <p className="admin__desc">Категории</p>
                        <p className="admin__desc">Машины</p>
                    </div>
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
                    <div className="admin__block">
                        <h5 className="admin__subtitle">Заявки</h5>

                    </div>
                    <div className="admin__block">
                        <h5 className="admin__subtitle"><a href="/seo">SEO настройки</a> </h5>

                    </div>


                </div>
            </header>
            <section className="admin__hero">
                <div className="admin__hero_header ">
                    <div className="admin__hero_admin">
                        <a href="#" className="">Admin</a>
                    </div>
                </div>
                <div className="admin__seo_block">
                    <h3 className="admin__categories_title">
                        SEO настройки
                    </h3>
                    <div className="admin__categories_header">
                        <p className="admin__categories_head">SEO настройки</p>
                        <div className="admin__seo_main d-flex">
                            <div className="admin__seo_col d-flex flex-column">
                                <label className="admin__seo_label">Название Веб-сайта</label>
                                <input type="text" className="admin__seo_electro" placeholder="Электромобиль Бишкек"/>
                                <label className="admin__seo_label">Мета-описание</label>
                                <textarea type="text" className="admin__seo_text" placeholder="Купить электромобиль в Кыргызстане по низким ценам, без растаможки! Таможенные пошлины на электрокары отменены"/>
                                <label className="admin__seo_label">Ключевые слова</label>
                                <textarea type="text" className="admin__seo_text" placeholder="Электромобиль Бишкек,Электромобиль кыргызстан,Купить электромобиль Бишкек,Электрокар Бишкек,Купить электрокар"/>
                                <span className="admin__seo_line"></span>
                                <button className="admin__seo_btn">Сохранить</button>
                            </div>
                            <div className="admin__seo_images">
                                <label  className="admin__seo_icon">Мета изображение (icon)</label>
                                <div className="">
                                    <img src={logo} alt="" className="admin__seo_img"/>
                                </div>
                                <label  className="admin__seo_icon">Обновить мета изображение</label>
                                <input type="file" className="admin__seo_file"/>

                                <label  className="admin__seo_icon">Логотип</label>
                                <div className="">
                                    <img src={logo} alt="" className="admin__seo_img"/>
                                </div>
                                <label  className="admin__seo_icon">Обновить Логотип</label>
                                <input type="file" className="admin__seo_file"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Seo