import React, {useEffect, useState} from "react"
import car_1 from '../images/testdrive_Car1.png'
import timeicon from '../images/timeicon.svg'
import priteicon from '../images/priceicon.svg'
import mapicon from '../images/mapicon.svg'
import light_line from "../images/light_line.png";
import light_line_media from "../images/light_line_media.png";
import axios from 'axios'
import { _LINK } from '../data/Data'
import { Footer } from './Footer'

const TestDrive = ({setIsLight}) => {

    useEffect(() => {
        setIsLight(false)
    }, [])

    const [request, setRequest] = useState({isCalled: false, category: 1})

    const [icons, setIcons] = useState()
    const [testDrive, setTestDrive] = useState()

    useEffect(() => {
        const get2 = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/user/socials`
            }
            try {
                const { data } = await axios(config)
                setIcons(data)
            } catch (e) {
                console.log(e)
            }
        }
        get2()
        const getTestDrivePage = async () => {
            const { data } = await axios(`${_LINK}/v1/api/page/testdrive`)
            console.log(data)
            setTestDrive(data)
        }
        getTestDrivePage()
    }, [])

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
                            <h1 className="testdrive__hero_title">{testDrive?.title}
                                <img src={light_line_media} alt="" className="testdrive__line_media"/>
                            </h1>
                            <p className="testdrive__hero_subtitle">{testDrive?.subtitle}</p>
                            <div className="testdrive__hero_grid">
                                <div className="testdrive__hero_block">
                                    <img src={timeicon} alt=""/>
                                    <p className="testdrive__hero_text">{testDrive?.firstText}
                                    </p>
                                </div>
                                <div className="testdrive__hero_block">
                                    <img src={priteicon} alt=""/>
                                    <p className="testdrive__hero_text">{testDrive?.secondText}</p>
                                </div>
                                <div className="testdrive__hero_block">
                                    <img src={mapicon} alt=""/>
                                    <p className="testdrive__hero_text">{testDrive?.thirdText}<br/>
                                        <a className="orange_text" href={icons?.address} target="_blank">Смотреть на карте</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <img src={testDrive?.carImage ? `${_LINK}/v1/api/file/${testDrive?.carImage?.name}` : car_1} alt="" className='testdrive__hero_img'/>
                    </div>
                </div>
            </section>
            <section className="testdrive__form" id="testdrive">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img"/>
                        {testDrive?.formTitle}
                    </h2>
                    <p className="testdrive__form_subtitle">
                        {testDrive?.formDesc}
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