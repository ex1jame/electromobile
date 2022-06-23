import '../style/categ.css'
import React, {useEffect} from 'react'
import logo from '../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import {NavLink} from "react-router-dom";
const Categories = ({setDisplay}) => {

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
                <div className="admin__categories_block ">
                    <h3 className="admin__categories_title">
                        Categories
                    </h3>
                    <div className="admin__categories_header d-flex align-center justify-between">
                        <p className="admin__categories_head">Categories</p>
                        <button href="/admin" className="admin__categories_add"><NavLink to="/admin">Add</NavLink></button>
                    </div>
                    <div className="table__block table__categories">
                    <table className="table ">
                        <thead className= "table__header_block">
                        <tr className="table__header_flex">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Option</th>
                        </tr>
                        </thead>
                        <tbody className="table__block_body">
                        <tr className="table__header_flex">
                            <td className="table__block_id">1</td>
                            <td className="table__block_name">Хетчбеки</td>

                            <td className="table__block_option "><NavLink to="/edit"><img src={pen} alt="" className="table__icon"/></NavLink><img src={trash} alt="" className="table__icon"/></td>
                        </tr>
                        <tr className="table__header_flex">
                            <td className="table__block_id">1</td>
                            <td className="table__block_name">Хетчбеки</td>

                            <td className="table__block_option "><NavLink to="/edit"><img src={pen} alt="" className="table__icon"/></NavLink><img src={trash} alt="" className="table__icon"/></td>
                        </tr>
                        <tr className="table__header_flex">
                            <td className="table__block_id">1</td>
                            <td className="table__block_name">Хетчбеки</td>
                            <td className="table__block_option "><NavLink to="/edit"><img src={pen} alt="" className="table__icon"/></NavLink><img src={trash} alt="" className="table__icon"/></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Categories