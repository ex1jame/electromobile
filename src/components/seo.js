import React, { useEffect, useState } from 'react'
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
    const [meta, setMeta] = useState(null)
    const [file, setFile] = useState(null)
    const [dark, setDark] = useState(null)

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
            if (meta) {
                addImage(meta, "meta")
            }
            if (file) {
                addImage(file, "file")
            }
            if (dark) {
                addImage(dark, "dark")
            }
            alert("Запись создана")
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    const addImage = async (file, name) => {
        const formData = new FormData()
        formData.append(
            'file',
            file,
            file.name
        )
        await axios.post(`${_LINK}/v1/api/request/seo/${name}`, formData, {
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
        })
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
                                        <img src={seo?.metaLogo?.name ? `${_LINK}/v1/api/file/${seo?.metaLogo?.name}` : logo} alt="" className="admin__seo_img" />
                                    </div>
                                    <label className="admin__seo_icon">Обновить мета изображение</label>
                                    <input type="file" className="admin__seo_file" onInput={(e) => {
                                        setMeta(e.target.files[0])
                                    }} />

                                    <label className="admin__seo_icon">Логотип Светлый</label>
                                    <div className="">
                                        <img src={seo?.logoFile?.name ? `${_LINK}/v1/api/file/${seo?.logoFile?.name}` : logo} alt="" className="admin__seo_img" />
                                    </div>
                                    <label className="admin__seo_icon">Обновить Логотип</label>
                                    <input type="file" className="admin__seo_file" onInput={(e) => {
                                        setFile(e.target.files[0])
                                    }} />

                                    <label className="admin__seo_icon">Логотип Тёмный</label>
                                    <div className="">
                                        <img src={seo?.logoDarkFile?.name ? `${_LINK}/v1/api/file/${seo?.logoDarkFile?.name}` : logo} alt="" className="admin__seo_img" style={{background: "#fff"}}/>
                                    </div>
                                    <label className="admin__seo_icon">Обновить Логотип</label>
                                    <input type="file" className="admin__seo_file" onInput={(e) => {
                                        setDark(e.target.files[0])
                                    }} />
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