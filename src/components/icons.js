import '../style/categ.css'
import React, {useEffect} from 'react'
import logo from '../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import {NavLink} from "react-router-dom";
import  telegram from "../images/telegram-brands.svg"
import  whatsapp from "../images/whatsapp-brands.svg"
import  youtube from "../images/youtube-brands.svg"
import  facebook from "../images/facebook-brands.svg"
import  instagram from "../images/instagram-brands.svg"
const Icons = ({setDisplay}) => {

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
                        <h5 className="admin__subtitle">SEO настройки</h5>

                    </div>

                </div>
            </header>
            <section className="admin__hero">
                <div className="admin__hero_header ">
                    <div className="admin__hero_admin">
                        <a href="#" className="">Admin</a>
                    </div>
                </div>
                <div className="admin__icons_block">
                    <h3 className="admin__categories_title">
                        Заявки
                    </h3>
                    <div className="admin__categories_header ">
                        <p className="admin__categories_head">Заявки</p>
                    </div>
                    <div className="table__block">
                        <table className="table ">
                            <thead className= "table__header_block">
                            <tr className="table__header_flex">
                                <th className="table__id">ID</th>
                                <th className="table__name">Название</th>
                                <th className="table__num">Иконка</th>

                                <th className="table__option">Option</th>
                            </tr>
                            </thead>
                            <tbody className="table__block_body">

                            <tr className="table__header_flex">
                                <td className="table__block_id">1</td>
                                <td className="table__block_name">Telegram</td>
                                <td className="table__block_num"><img src={telegram} alt="" className="table__icon_telegram"/></td>
                                <td className="table__block_option "><img src={pen} alt="" className="table__icon"/><img src={trash} alt="" className="table__icon"/></td>
                            </tr>
                            <tr className="table__header_flex">
                                <td className="table__block_id">2</td>
                                <td className="table__block_name">Whatsapp</td>
                                <td className="table__block_num"><img src={whatsapp} alt="" className="table__icon_telegram"/></td>
                                <td className="table__block_option "><img src={pen} alt="" className="table__icon"/><img src={trash} alt="" className="table__icon"/></td>
                            </tr>
                            <tr className="table__header_flex">
                                <td className="table__block_id">3</td>
                                <td className="table__block_name">Youtube</td>
                                <td className="table__block_num"><img src={youtube} alt="" className="table__icon_telegram"/></td>
                                <td className="table__block_option "><img src={pen} alt="" className="table__icon"/><img src={trash} alt="" className="table__icon"/></td>
                            </tr>
                            <tr className="table__header_flex">
                                <td className="table__block_id">4</td>
                                <td className="table__block_name">Facebook</td>
                                <td className="table__block_num"><img src={facebook} alt="" className="table__icon_telegram"/></td>
                                <td className="table__block_option "><img src={pen} alt="" className="table__icon"/><img src={trash} alt="" className="table__icon"/></td>
                            </tr>
                            <tr className="table__header_flex">
                                <td className="table__block_id">5</td>
                                <td className="table__block_name">Instagram</td>
                                <td className="table__block_num"><img src={instagram} alt="" className="table__icon_telegram"/></td>
                                <td className="table__block_option "><img src={pen} alt="" className="table__icon"/><img src={trash} alt="" className="table__icon"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Icons