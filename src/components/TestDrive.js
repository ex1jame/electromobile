import React, {useEffect} from "react"
import '../style/TestDrive.css'

import '../style/media.css'
import car_1 from '../images/testdrive_Car1.png'
import timeicon from '../images/timeicon.svg'
import priteicon from '../images/priceicon.svg'
import mapicon from '../images/mapicon.svg'
import light_line from "../images/light_line.png";
import light_line_media from "../images/light_line_media.png";

const TestDrive = ({setIsLight}) => {

    useEffect(() => {
        setIsLight(false)
    }, [])

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
            <section className="testdrive__form">
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
                                <input type="text" className='testdrive__form_input' placeholder="ФИО"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="tel" className='testdrive__form_input' placeholder="Телефон"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="date" className='testdrive__form_input' placeholder=""/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="text" className='testdrive__form_input' placeholder="Время"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <p className="testdrive__form_desc">
                                Клиент считается зарегистрированным после подтверждения даты и времени нашим менеджером
                            </p>
                        </form>
                        <button className="orange_btn">ЗАПИСАТЬСЯ</button>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default TestDrive