import React, { useEffect } from 'react'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { AdminPanel } from './AdminPanel'
import { logoutAction } from '../redux/actions/login'
const Materials = ({ setDisplay }) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    const { isAuth } = useSelector(store => store.login)
    const { dispatch } = useDispatch()

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
                    <div className="admin__categories_block">
                        <h3 className="admin__categories_title">
                            Cars
                        </h3>
                        <div className="admin__categories_header d-flex align-center justify-between">
                            <p className="admin__categories_head">Cars</p>
                            <form action="/create">
                                <button href="/create" className="admin__categories_add">Add</button>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        )
    } else {
        return <Login />
    }
}

export default Materials