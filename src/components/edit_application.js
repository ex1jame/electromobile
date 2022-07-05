import '../style/categ.css'
import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import { NavLink, useParams } from "react-router-dom";
import logo from "../images/Logo.svg"
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { AdminPanel } from './AdminPanel'
import { _LINK } from '../data/Data'
import axios from 'axios'
import { logoutAction } from '../redux/actions/login'

const Edit_application = ({ setDisplay }) => {

    const [application, setApplication] = useState({})
    const [bool, setBool] = useState(false)

    useEffect(() => {
        setDisplay(true)
        const getApplication = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/request/id/${id}`,
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            }
            try {
                const { data } = await axios(config)
                setApplication(data)
                setBool(data.isCalled)
            } catch (e) {
                alert(e)
            }
        }
        getApplication()
    }, [])

    const dispatch = useDispatch()

    const { isAuth } = useSelector(store => store.login)

    const { id } = useParams()

    const handleTitle = (id) => {
        switch (+id) {
            case 1: return "Тест-драйв"
            case 2: return "Оформление заказов"
            case 3: return "Кредитование"
            case 4: return "Консультация"
            case 5: return "Дилерам"
        }
    }

    const handleChange = async () => {
        const getApplication = async () => {
            const config = {
                method: 'post',
                url: `${_LINK}/v1/api/request/change/${bool}/${id}`,
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            }
            try {
                const { data } = await axios(config)
                window.location.reload()
            } catch (e) {
                alert(e)
            }
        }
        getApplication()
    }

    if (isAuth) {
        return (
            <div className="edit">
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
                    <div className="admin__create_block">
                        <h3 className="admin__categories_title">
                            {
                                handleTitle(application?.category)
                            }
                        </h3>
                        <div className="admin__categories_header">
                            <p className="admin__categories_head">{application?.fullName}</p>
                            <div className="admin__seo_main">
                                <div className="admin__seo_col d-flex flex-column">
                                    <label className="admin__create_label">Статус</label>
                                    {
                                        application?.isCalled ?
                                            (
                                                <select className='admin__seo_electro' onInput={(e) => {
                                                    setBool(e.target.value)
                                                }}>
                                                    <option value={true}>Звонили</option>
                                                    <option value={false}>Не звонили</option>
                                                </select>
                                            ) :
                                            (
                                                <select className='admin__seo_electro' onInput={(e) => {
                                                    setBool(e.target.value)
                                                }}>
                                                    <option value={false}>Не звонили</option>
                                                    <option value={true}>Звонили</option>
                                                </select>
                                            )
                                    }
                                    <label className="admin__create_label">Заказ</label>
                                    <input disabled type="text" className="admin__seo_electro car_mini_desc" placeholder={handleTitle(application?.category)} />
                                    <label className="admin__create_label">Имя</label>
                                    <input disabled type="text" className="admin__seo_electro car_long_desc" placeholder={application?.fullName} />
                                    <label className="admin__create_label">Телефон</label>
                                    <input disabled type="text" className="admin__seo_electro car_wheel_drive" placeholder={application?.phone} />
                                    <label className="admin__create_label">Дата тест-драйва</label>
                                    <input disabled type="text" className="admin__seo_electro car_range" placeholder={application?.dateTime?.substr(0, 10)} />
                                    <label className="admin__create_label">Время</label>
                                    <input disabled type="text" className="admin__seo_electro car_motor_power" placeholder={application?.time} />

                                    <span className="admin__seo_line"></span>
                                    <button className="admin__seo_btn" onClick={handleChange}>Сохранить</button>
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

export default Edit_application