import '../style/categ.css'
import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.svg"
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { AdminPanel } from './AdminPanel'
import { _LINK } from '../data/Data'
import axios from 'axios'
import { logoutAction } from '../redux/actions/login'

const Seo = ({ setDisplay, seo }) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    useEffect(() => {
        setNewSeo({ ...seo })
    }, [seo])

    const { isAuth } = useSelector(store => store.login)
    const [newSeo, setNewSeo] = useState({ id: 1 })

    const handleSend = async () => {
        const config = {
            method: 'post',
            url: `${_LINK}/v1/api/request/seo`,
            headers: {
                'Authorization': localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(newSeo)
        }
        try {
            const { data } = await axios(config)
            alert("Запись создана")
        } catch (e) {
            alert(e)
        }
        console.log(newSeo)
    }

    const dispatch = useDispatch()

    if (isAuth) {
        return (
            <div className="admin">
                <AdminPanel />
                <section className="admin__hero">
                    <div className="admin__hero_header ">
                        <div className="admin__hero_admin">
                            <span style={{ color: "#FFF", fontSize: "20px", cursor: "pointer" }}
                                onClick={() => {
                                    dispatch(logoutAction())
                                }}
                            >Logout</span>
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
                                    <input type="text" className="admin__seo_electro" placeholder="Электромобиль Бишкек"
                                        onInput={(e) => {
                                            setNewSeo({ ...newSeo, title: e.target.value })
                                        }}
                                        value={newSeo?.title}
                                    />
                                    <label className="admin__seo_label">Мета-описание</label>
                                    <textarea type="text" className="admin__seo_text" placeholder="Купить электромобиль в Кыргызстане по низким ценам, без растаможки! Таможенные пошлины на электрокары отменены"
                                        onInput={(e) => {
                                            setNewSeo({ ...newSeo, metaDesc: e.target.value })
                                        }}
                                        value={newSeo?.metaDesc}
                                    />
                                    <label className="admin__seo_label">Ключевые слова</label>
                                    <textarea type="text" className="admin__seo_text" placeholder="Электромобиль Бишкек,Электромобиль кыргызстан,Купить электромобиль Бишкек,Электрокар Бишкек,Купить электрокар"
                                        onInput={(e) => {
                                            setNewSeo({ ...newSeo, keyWords: e.target.value })
                                        }}
                                        value={newSeo?.keyWords}
                                    />
                                    <span className="admin__seo_line"></span>
                                    <button className="admin__seo_btn" onClick={handleSend}>Сохранить</button>
                                </div>
                                <div className="admin__seo_images">
                                    <label className="admin__seo_icon">Мета изображение (icon)</label>
                                    <div className="">
                                        <img src={logo} alt="" className="admin__seo_img" />
                                    </div>
                                    <label className="admin__seo_icon">Обновить мета изображение</label>
                                    <input type="file" className="admin__seo_file" />

                                    <label className="admin__seo_icon">Логотип</label>
                                    <div className="">
                                        <img src={logo} alt="" className="admin__seo_img" />
                                    </div>
                                    <label className="admin__seo_icon">Обновить Логотип</label>
                                    <input type="file" className="admin__seo_file" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } else {
        return <Login />
    }
}

export default Seo