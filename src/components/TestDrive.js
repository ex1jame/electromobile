import React, {useEffect, useState} from "react"
import '../style/TestDrive.css'

import '../style/media.css'
import car_1 from '../images/testdrive_Car1.png'
import timeicon from '../images/timeicon.svg'
import priteicon from '../images/priceicon.svg'
import mapicon from '../images/mapicon.svg'
import light_line from "../images/light_line.png";
import light_line_media from "../images/light_line_media.png";
import axios from 'axios'
import { _LINK } from '../data/Data'
import instagram from '../images/Instagram.png'
import whatsapp from '../images/Whatsapp.png'
import youtube from '../images/Youtube.png'
import telegram from '../images/Telegram.png'
import { Footer } from './Footer'

const TestDrive = ({setIsLight}) => {

    useEffect(() => {
        setIsLight(false)
    }, [])

    const [request, setRequest] = useState({isCalled: false, category: 1})

    const handleCreateRequest = async () => {
        const config = {
            method: 'post',
            url: `${_LINK}/v1/api/user/request/create`,
            headers: {
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(request)
        }
        const { data } = await axios(config)
        window.location.reload()
    }


    const handleAddData = ({target: {id, value}}) => {
        switch (id) {
            case "fullName" : {
                setRequest({...request, fullName : value})
                break;
            }
            case "phone" : {
                setRequest({ ...request, phone: value })
                break;
            }
            case "dateTime" : {
                setRequest({ ...request, dateTime: `${value}T00:00:00` })
                break;
            }
            case "time" : {
                setRequest({ ...request, time: value })
                break;
            }
        }

    }

    return (
        <div className="testdrive">
            <section className="testdrive__hero">
                <div className="container">
                    <div className="d-flex justify-between align-center">
                        <div className="testdrive__hero_main">
                            <h1 className="testdrive__hero_title">Тест-драйв электромобиля
                                <img src={light_line_media} alt="" className="testdrive__line_media"/>
                            </h1>
                            <p className="testdrive__hero_subtitle">Мы предоставляем возможность лично прочувствовать
                                электромобиль </p>
                            <div className="testdrive__hero_grid">
                                <div className="testdrive__hero_block">
                                    <img src={timeicon} alt=""/>
                                    <p className="testdrive__hero_text">Тест-драйв длится 30 минут по любому выбранному
                                        маршруту
                                    </p>
                                </div>
                                <div className="testdrive__hero_block">
                                    <img src={priteicon} alt=""/>
                                    <p className="testdrive__hero_text">Тест-драйв абсолютно бесплатный! При себе
                                        необходимо
                                        иметь права.</p>
                                </div>
                                <div className="testdrive__hero_block">
                                    <img src={mapicon} alt=""/>
                                    <p className="testdrive__hero_text">г. Бишкек, ул. Раззакова 32, БЦ “Олимп”, 9 этаж.<br/>
                                        <a className="orange_text">Смотреть на карте</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <img src={car_1} alt="" className='testdrive__hero_img'/>
                    </div>
                </div>
            </section>
            <section className="testdrive__form" id="testdrive">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img"/>
                        КАК ЗАПИСАТЬСЯ?
                    </h2>
                    <p className="testdrive__form_subtitle">
                        Выберите подходящую дату, заполните заявку и с вами свяжется наш менеджер
                        для подтверждения данной информации.
                    </p>
                    <div className="testdrive__form_block">
                        <form className='testdrive__form_form'>
                            <div className="testdrive__form_info">
                                <input type="text" className='testdrive__form_input' placeholder="ФИО" onInput={handleAddData} id="fullName"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="tel" className='testdrive__form_input' placeholder="Телефон" onInput={handleAddData} id="phone"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="date" className='testdrive__form_input' placeholder="" onInput={handleAddData} id="dateTime"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="text" className='testdrive__form_input' placeholder="Время" onInput={handleAddData} id="time" />
                                <span className="testdrive__form_span"></span>
                            </div>
                            <p className="testdrive__form_desc">
                                Клиент считается зарегистрированным после подтверждения даты и времени нашим менеджером
                            </p>
                        </form>
                        <button className="orange_btn" onClick={handleCreateRequest}>ЗАПИСАТЬСЯ</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default TestDrive