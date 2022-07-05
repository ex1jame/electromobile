import '../style/categ.css'
import React, { useEffect, useState } from 'react'
import logo from '../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import { NavLink } from "react-router-dom";
import Login from './Login'
import { useSelector } from 'react-redux'
import { AdminPanel } from './AdminPanel'
import axios from 'axios'
import { _LINK } from '../data/Data'
const Categories = ({ setDisplay }) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const get = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/car/category`,
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            }
            try {
                const { data } = await axios(config)
                console.log(data)
                setCategories(data)
            } catch (e) {
                alert(e)
            }
        }
        get()
    }, [])


    const handleDelete = async (id) => {
        const config = {
            method: 'post',
            url: `${_LINK}/v1/api/car/category/delete/${id}`,
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        }
        try {
            const { data } = await axios(config)
            console.log(data)
            setCategories(data)
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }
    const { isAuth } = useSelector(store => store.login)


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
                    <div className="admin__categories_block ">
                        <h3 className="admin__categories_title">
                            Categories
                        </h3>
                        <div className="admin__categories_header d-flex align-center justify-between">
                            <p className="admin__categories_head">Categories</p>
                            <NavLink to="/new-category"> <button href="/admin" className="admin__categories_add">Add</button></NavLink>
                        </div>
                        <div className="table__block table__categories">
                            <table className="table ">
                                <thead className="table__header_block">
                                    <tr className="table__header_flex">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody className="table__block_body">
                                    {
                                        categories.map((el) => (
                                            <tr className="table__header_flex" key={el.id}>
                                                <td className="table__block_id">{el.id}</td>
                                                <td className="table__block_name">{el.name}</td>
                                                <td className="table__block_option "><NavLink to={`/edit-category/${el.id}/${el.name}`}><img src={pen} alt="" className="table__icon" /></NavLink><img onClick={() => { handleDelete(el.id) }} src={trash} alt="" className="table__icon" /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        )
    } else {
        return <Login />
    }
}

export default Categories