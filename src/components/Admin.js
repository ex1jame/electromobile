import '../style/admin.css'
import React, { useEffect, useState } from 'react'
import logo from '../images/Logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import { Link } from 'react-router-dom'
import { AdminPanel } from './AdminPanel'
import { _LINK } from '../data/Data'
import axios from 'axios'
import { logoutAction } from '../redux/actions/login'


const Admin = ({ setDisplay }) => {

    useEffect(() => {
        setDisplay(true)
        console.log("hey")
    }, [])

    const { isAuth } = useSelector(store => store.login)
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
                </section>

            </div>
        )
    } else {
        return <Login />
    }
}

export default Admin