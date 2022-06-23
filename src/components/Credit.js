import '../style/credit.css'
import '../style/media.css'
import React, { useState } from 'react'
import {useEffect} from 'react'
import logo from "../images/logo_black.svg";
import {NavLink} from "react-router-dom";
import car from "../images/credit_car.png"
import dcb from "../images/DCB.svg"
import aylbank from "../images/aylbank.svg"
import baitushum from "../images/baitushum.svg"
import light_line from "../images/light_line.png";
import axios from "axios"
import { _LINK } from '../data/Data';

const Credit = ({setIsLight}) => {

    useEffect(() => {
        setIsLight(true)
    }, [])

    const [request, setRequest] = useState({ isCalled: false, category: 3 })

    const handleCreateRequest = async () => {
        const config = {
            method: 'post',
            url: `${_LINK}/v1/api/user/request/create`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(request)
        }
        const { data } = await axios(config)
    }


    const handleAddData = ({ target: { id, value } }) => {
        switch (id) {
            case "fullName": {
                setRequest({ ...request, fullName: value })
                break;
            }
            case "phone": {
                setRequest({ ...request, phone: value })
                break;
            }
            case "dateTime": {
                setRequest({ ...request, dateTime: `${value}T00:00:00` })
                break;
            }
            case "time": {
                setRequest({ ...request, time: value })
                break;
            }
        }

    }

    return (
        <div className="credit">
            <section className="credit__hero d-flex flex-column">
                <div className="credit__img">
                    <img src={car} alt=""/>
                </div>
                <div className="credit__main-block"><span className="credit__line"></span>
                    <span className="credit__line"></span>
                    <div className="credit__block">

                        <div className="credit__col">
                            <h2 className="credit__title">РАССРОЧКА</h2>
                            <p className="credit__subtitle">до <span className="orange_span">3</span> лет<br/>
                                Первоначальный взнос <span className="orange_span">10%</span><br/>
                                <span className="orange_span">0,5%</span> в месяц</p>
                            <img src={dcb} alt="" className="credit__dcb"/>

                        </div>

                        <div className="credit__col">
                            <h2 className="credit__title">АВТОКРЕДИТ</h2>
                            <p className="credit__subtitle">до <span className="orange_span">1</span> года - <span
                                className="orange_span">13%</span> годовых<br/>
                                до <span className="orange_span">2</span> лет - <span
                                    className="orange_span">16%</span> годовых<br/>
                                до <span className="orange_span">3</span> лет - <span
                                    className="orange_span">18%</span> годовых<br/>
                                Первоначальный взнос на новые авто - <span className="orange_span">20%</span> <br/>
                                Взнос на б/у авто не ранее 2017 г. - <span className="orange_span">30%</span></p>
                            <img src={baitushum} alt="" className="credit__baitushum"/>

                        </div>
                        <div className="credit__col">
                            <h2 className="credit__title">ЛИЗИНГ</h2>
                            <p className="credit__subtitle">до <span className="orange_span">5</span> лет<br/>
                                Первоначальный взнос <span className="orange_span">10-30%</span><br/>
                                <span className="orange_span">9%</span> годовых в $ США<br/>
                                <span className="orange_span">16%</span> годовых в сомах</p>
                            <img src={aylbank} alt="" className="credit__ayl"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="credit__form">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img"/>
                        КАК ЗАПИСАТЬСЯ?
                    </h2>
                    <p className="credit__form_subtitle">
                        Выберите подходящую дату, заполните заявку и с вами свяжется наш менеджер
                        для подтверждения данной информации.
                    </p>
                    <div className="credit__form_block">
                        <form className='credit__form_form'>
                            <div className="credit__form_info">
                                <input type="text" className='credit__form_input' placeholder="ФИО" onInput={handleAddData} id="fullName" />
                                <span className="credit__form_span"></span>
                            </div>
                            <div className="credit__form_info">
                                <input type="tel" className='credit__form_input' placeholder="Телефон" onInput={handleAddData} id="phone" />
                                <span className="credit__form_span"></span>
                            </div>
                            <div className="credit__form_info">
                                <input type="date" className='credit__form_input' placeholder="" onInput={handleAddData} id="dateTime" />
                                <span className="credit__form_span"></span>
                            </div>
                            <div className="credit__form_info">
                                <input type="text" className='credit__form_input' placeholder="Время" onInput={handleAddData} id="time" />
                                <span className="credit__form_span"></span>
                            </div>
                            <p className="credit__form_desc">
                                Клиент считается зарегистрированным после подтверждения даты и времени нашим менеджером
                            </p>
                        </form>
                        <button className="orange_btn" onClick={handleCreateRequest}>ЗАПИСАТЬСЯ</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Credit
