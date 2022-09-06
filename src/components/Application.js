import React, { useEffect, useState } from 'react'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import { NavLink, useParams } from "react-router-dom";
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { AdminPanel } from './AdminPanel'
import { _LINK } from '../data/Data'
import axios from 'axios'
import { Paginate } from './Paginate'
import { logoutAction } from '../redux/actions/login'
const Application = ({ setDisplay }) => {

    useEffect(() => {
        setDisplay(true)
    }, [])



    const { isAuth } = useSelector(store => store.login)

    const { id } = useParams()
    const [page, setPage] = useState(0)
    const [back, setBack] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        const getApplications = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/request/page/${page}/50/${id}`,
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            }
            try {
                const { data } = await axios(config)
                setBack(data)
            } catch (e) {
                alert(e)
            }
        }
        getApplications()
    }, [page, id])

    const handleTitle = () => {
        switch (+id) {
            case 1: return "Тест-драйв"
            case 2: return "Оформление заказов"
            case 3: return "Кредитование"
            case 4: return "Консультация"
            case 5: return "Дилерам"
        }
    }

    const handleDelete = (id) => {
        const getApplication = async () => {
            const config = {
                method: 'post',
                url: `${_LINK}/v1/api/request/delete/${id}`,
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
                    <div className="admin__application_block">
                        <h3 className="admin__categories_title">
                            {handleTitle()}
                        </h3>
                        <div className="table__block">
                            <table className="table ">
                                <thead className="table__header_block">
                                    <tr className="table__header_flex">
                                        <th className="table__id">ID</th>
                                        <th className="table__name">ФИО</th>
                                        <th className='table__name'>Модель</th>
                                        <th className="table__num">Телефон</th>
                                        <th className="table__status ">Статус</th>
                                        <th className="table__option">Option</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="table__block_body">
                                    {
                                        back?.content?.map((el, idx) => (
                                            <tr className="table__header_flex" key={idx}>
                                                <td className="table__block_id">{el.id}</td>
                                                <td className="table__block_name">{el.fullName}</td>
                                                <td className="table__block_name">{el.carModel}</td>
                                                <td className="table__block_num">{el.phone}</td>
                                                <td className="table__block_status "><span className={`${el.isCalled ? "sm-green" : "sm-red"}`}>{el.isCalled ? "Звонили" : "Не звонили"}</span></td>
                                                <td className="table__block_option "><NavLink to={`/edit/${el.id}`}><img src={pen} alt="" className="table__icon" /></NavLink><img onClick={() => handleDelete(el.id)} src={trash} alt="" className="table__icon" /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div>
                            {
                                back?.totalPages && <div className='pagination__container'><Paginate page={page} setPage={setPage} totalPages={back?.totalPages} /></div>
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    } else {
        return <Login />
    }
}

export default Application