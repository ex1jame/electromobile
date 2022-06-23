import '../style/categ.css'
import React, {useEffect} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import {NavLink} from "react-router-dom";
import logo from "../images/Logo.svg"

const Create = ({setDisplay}) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    return (
        <div className="create">
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
                        Adding new material
                    </h3>
                    <div className="admin__categories_header">
                        <p className="admin__categories_head">Adding new material</p>
                        <div className="admin__seo_main d-flex">
                            <div className="admin__seo_col d-flex flex-column">
                                <label className="admin__create_label">Марка</label>
                                <input type="text" className="admin__seo_electro car_brand" placeholder="Марка"/>
                                <label className="admin__create_label">Мини-описание</label>
                                <input type="text" className="admin__seo_electro car_mini_desc" placeholder="Марка"/>
                                <label className="admin__create_label">Длинное-описание</label>
                                <input type="text" className="admin__seo_electro car_long_desc" placeholder="Марка"/>
                                <label className="admin__create_label">Год выпуска</label>
                                <input type="text" className="admin__seo_electro car_wheel_drive" placeholder=" привод"/>
                                <label className="admin__create_label">запас хода (NEDC)</label>
                                <input type="text" className="admin__seo_electro car_range" placeholder="запас хода (NEDC)"/>
                                <label className="admin__create_label">мощность электродвигателя</label>
                                <input type="text" className="admin__seo_electro car_motor_power" placeholder="мощность электродвигателя"/>
                                <label className="admin__create_label">емкость батареи</label>
                                <input type="text" className="admin__seo_electro car_battery_power" placeholder="емкость батареи"/>
                                <label className="admin__create_label">макс. скорость</label>
                                <input type="text" className="admin__seo_electro car_max_speed" placeholder=" макс. скорость"/>
                                <label className="admin__create_label">Время до полного заряда</label>
                                <input type="text" className="admin__seo_electro car_charge_time" placeholder="Время до полного заряда"/>
                                <label className="admin__create_label">крутящий момент двигателя</label>
                                <input type="text" className="admin__seo_electro car_engine_torque" placeholder="крутящий момент двигателя"/>
                                <label className="admin__create_label">цвета</label>
                                <input type="text" className="admin__seo_electro car_color" placeholder="цвета"/>
                                <label className="admin__create_label">базовая цена</label>
                                <input type="text" className="admin__seo_electro car_base_price" placeholder="базовая цена"/>
                                <label className="admin__create_label">цена при полной комплектации</label>
                                <input type="text" className="admin__seo_electro car_full_price" placeholder="цена при полной комплектации"/>
                                <label className="admin__create_label">макс. крутящий момент</label>
                                <input type="text" className="admin__seo_electro car_max_torque" placeholder="макс. крутящий момент"/>
                                <label className="admin__create_label">размеры кузова</label>
                                <input type="text" className="admin__seo_electro car_body_size" placeholder="размеры кузова"/>
                                <label className="admin__create_label">размер колес</label>
                                <input type="text" className="admin__seo_electro car_wheel_size" placeholder="размер колес"/>
                                <label className="admin__create_label">колесная база</label>
                                <input type="text" className="admin__seo_electro car_wheelbase" placeholder="колесная база"/>
                                <label className="admin__create_label"> снаряженная масса</label>
                                <input type="text" className="admin__seo_electro car_curb_weight" placeholder=" снаряженная масса"/>
                                <label className="admin__create_label">клиренс</label>
                                <input type="text" className="admin__seo_electro car_clearance" placeholder="клиренс"/>
                                <label className="admin__create_label">приборная панель</label>
                                <input type="text" className="admin__seo_electro car_dashboard" placeholder="приборная панель"/>
                                <span className="admin__seo_line"></span>
                                <button className="admin__seo_btn">Сохранить</button>
                            </div>
                            <div className="admin__seo_images">
                                <label  className="admin__seo_icon">Главное фото</label>
                                <div className="">

                                </div>
                                <label  className="admin__seo_icon">Обновить </label>
                                <input type="file" className="admin__seo_file car_main_photo"/>

                                <label  className="admin__seo_icon">Второе фото</label>
                                <div className="">

                                </div>
                                <label  className="admin__seo_icon">Обновить</label>
                                <input type="file" className="admin__seo_file car_second_photo"/>

                                <label  className="admin__seo_icon">Третье фото</label>
                                <div className="">

                                </div>
                                <label  className="admin__seo_icon">Обновить </label>
                                <input type="file" className="admin__seo_file car_third_photo"/>

                                <label  className="admin__seo_icon">Мини фото</label>
                                <div className="">

                                </div>
                                <label  className="admin__seo_icon">Обновить мини фото</label>
                                <input type="file" className="admin__seo_file car_mini_photo"/>

                                <label  className="admin__seo_icon">Галерея</label>
                                <div className="">

                                </div>
                                <label  className="admin__seo_icon">Обновить Галерею</label>
                                <input type="file" className="admin__seo_file card_gallery"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Create