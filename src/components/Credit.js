import '../style/credit.css'
import '../style/media.css'
import React, {useEffect} from 'react'
import logo from "../images/logo_black.svg";
import {NavLink} from "react-router-dom";


const Credit = ({setIsLight}) => {

    useEffect(() => {
        setIsLight(true)
    }, [])

    return (
        <div className="credit">
            <section className="credit__hero">


            </section>
        </div>
    )
}
export default Credit