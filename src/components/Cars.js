import '../style/cars.css'
import React, { useState } from 'react'
import {Carousel} from 'react-responsive-carousel';
import light_line from "../images/light_line.png";
import {useEffect} from 'react'
import left_arrow from '../images/Left_arrow.svg'
import right_arrow from '../images/right_arr.svg'
import axios from 'axios';
import { _LINK } from '../data/Data';
import { Footer } from './Footer';


const Cars = ({setIsBlack}) => {

    useEffect(() => {
        setIsBlack(true)
    }, [])

    const [request, setRequest] = useState({ isCalled: false, category: 2 })

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
        window.location.reload()
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
        <div className="cars">
            <section className="cars__hero">
                <div className="cars__back_media"></div>
                <div className="cars__info_back">
                    <div className="container">
                        <div className="cars__text d-flex justify-center align-center flex-column">
                            <h1 className="cars__title">honda m-nv</h1>
                            <h2 className="cars__subtitle">Самый комфортный и доступный электрический кроссовер</h2>
                        </div>
                        <div className="cars__hero_grid">
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">480 <span className="cars__hero_subtitle">км</span></p>
                                <p className="cars__hero_subtitle">запас хода (NEDC)</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">61.3 <span className="cars__hero_subtitle">кВ/ч</span></p>
                                <p className="cars__hero_subtitle">емкость батареи</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">120 <span
                                    className="cars__hero_subtitle">кВ/ч/</span>163<span
                                    className="cars__hero_subtitle"> л.с.</span></p>
                                <p className="cars__hero_subtitle">мощность электродвигателя</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">280 <span className="cars__hero_subtitle">н.м.</span>
                                </p>
                                <p className="cars__hero_subtitle">макс. крутящий момент</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cars__about">
                <div className="cars__info_back">
                    <div className="container">
                        <div className="cars__text d-flex justify-center align-center flex-column">
                            <h2 className="cars__subtitle">Honda M-NV идеально подходит для передвижения по городу
                                и для выездов на природу</h2>
                        </div>
                        <div className="cars__hero_grid">
                            <div className="cars__hero_col">
                                <p className="cars__about_title">4324*1785*1637 <span
                                    className="cars__hero_subtitle">мм </span></p>
                                <p className="cars__hero_subtitle">размеры кузова</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">215/55 R18</p>
                                <p className="cars__hero_subtitle">размер колес</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">2610 <span className="cars__hero_subtitle">мм</span>
                                </p>
                                <p className="cars__hero_subtitle">колесная база </p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">1610 <span className="cars__hero_subtitle">кг</span>
                                </p>
                                <p className="cars__hero_subtitle">снаряженная масса</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cars__info">
                <div className="cars__info_back">
                    <div className="container">
                        <div className="cars__text d-flex justify-center align-center flex-column">
                        </div>
                        <div className="cars__hero_grid">
                            <div className="cars__hero_col">
                                <p className="cars__info_title">17 <span className="cars__hero_subtitle">см </span></p>
                                <p className="cars__info_subtitle">размеры кузова</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__info_title">передний</p>
                                <p className="cars__info_subtitle">размер колес</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__info_title">белый, темно-зеленый, синий</p>
                                <p className="cars__info_subtitle">колесная база </p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">140 <span className="cars__hero_subtitle">км/ч</span>
                                </p>
                                <p className="cars__info_subtitle">снаряженная масса</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cars__test">
                <div className="cars__test_shadow">
                    <div className="cars__test_grid">
                        <div className="cars__test_first d-flex">
                            <h4 className="cars__test_title">17 <span className="cars__test_subtitle">дюймов</span></h4>
                            <p className="cars__test_subtitle">приборная панель</p>
                        </div>
                        <div className="cars__test_second d-flex">

                            <p className="cars__test_subtitle">климат-контроль</p>
                        </div>
                        <div className="cars__test_third d-flex">

                            <p className="cars__test_subtitle">круиз-контроль</p>
                        </div>
                        <div className="cars__test_fourth d-flex">

                            <p className="cars__test_subtitle">бесключевой запуск</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cars__slide">
                <Carousel className="cars__slider_carousel"
                          emulateTouch
                          showArrows={true}
                          showIndicators={false}
                          transitionTime={2000}
                          showThumbs={false}
                          showStatus={false}
                          infiniteLoop
                >
                    <div className="cars__slide_page d-flex justify-between ">
                        <img src={left_arrow} alt="" className="cars__slide_arrow"/>
                        <img src={right_arrow} alt="" className="cars__slide_arrow"/>
                    </div>
                    <div className="cars__slide_page d-flex justify-between ">
                        <img src={left_arrow} alt="" className="cars__slide_arrow"/>
                        <img src={right_arrow} alt="" className="cars__slide_arrow"/>
                    </div>
                </Carousel>
            </section>
            <section className="credit__form" id="cars">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img" />
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
            <Footer />
        </div>
    )
}
export default Cars