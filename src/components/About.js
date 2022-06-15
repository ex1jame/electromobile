import '../style/about.css'
import React from 'react'

import light_line from "../images/light_line.png";
import {useEffect} from 'react'


const About = ({setIsLight}) => {

    useEffect(() => {
        setIsLight(false)
    }, [])

    return (
        <div className="aboutpage">
            <section className="aboutpage__hero d-flex ">
                <div className="container">
                    <div className="aboutpage__info">
                        <h1 className="aboutpage__title">НАША МИССИЯ - ПЕРЕСАДИТЬ ВСЮ СТРАНУ НА ЭЛЕКТРОтранСПОРТ</h1>
                        <div className="aboutpage__grid">
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">Основатели нашей команды, серийные предприниматели
                                    Чаргынов Замир
                                    и Чаргынов Дастан, также, как и многие современные жители нашей планеты
                                    вдохновлялись успехом Илона Маска
                                    с электромобилем Tesla.
                                    Они говорят: «Мы всегда мечтали ездить на электромобилях.
                                </p>
                            </div>
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">Основатели нашей команды, серийные предприниматели
                                    Чаргынов Замир
                                    и Чаргынов Дастан, также, как и многие современные жители нашей планеты
                                    вдохновлялись успехом Илона Маска
                                    с электромобилем Tesla.
                                    Они говорят: «Мы всегда мечтали ездить на электромобилях.
                                </p>
                            </div>
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">Основатели нашей команды, серийные предприниматели
                                    Чаргынов Замир
                                    и Чаргынов Дастан, также, как и многие современные жители нашей планеты
                                    вдохновлялись успехом Илона Маска
                                    с электромобилем Tesla.
                                    Они говорят: «Мы всегда мечтали ездить на электромобилях.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutpage__about d-flex">
                <div className="container">
                    <div className="aboutpage__info">
                        <div className="aboutpage__grid">
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">Не дожидаясь, пока Теsla или другие автоконцерны откроют
                                    у нас представительства или массовое производство на местах, мы основали компанию
                                    Электромобиль. Наша компания импортирует новые электромобили ведущих брэндов
                                </p>
                            </div>
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">в страны ЕАЭС.
                                    <br/>
                                    <br/>
                                    С нами вы можете купить различные электромобили, начиная с дорогих брендов, как
                                    Mercedes или Tesla, и заканчивая экономичными моделями от BYD и Changan.
                                </p>
                            </div>
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">Если наше волнение также резонирует
                                    у Вас, то мы нашли друг друга.
                                    <br/>
                                    <br/>
                                    Добро пожаловать в компанию единомышленников!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutpage__third d-flex">
                <div className="container">
                    <div className="aboutpage__info">
                        <h1 className="aboutpage__title">НАС ВЫБИРАЮТ ЛУЧШИЕ</h1>
                        <div className="aboutpage__grid">
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">За год существования компании “Электромобиль” мы успели
                                    продать более 50 электромобилей. Среди крупных покупателей есть такие компании, как
                                    GIZ, Jorgo Taxi, “Лекарь” и другие. На обзоре
                                    и в качестве покупателей у нас успели побывать такие успешные люди, как
                                </p>
                            </div>
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">известный КВН артист Ростислав Ященко,
                                    серебрянный призёр по греко-римской борьбе на Олимпиаде в Токио 2021 - Акжол
                                    Махмудов, известные кыргызстанские певцы Бек Исраилов, Омар и другие. Также мы
                                    успели открыть наш казахстанский филиал в городе Алматы!
                                </p>
                            </div>
                            <div className="aboutpage__col">
                                <p className="aboutpage__desc">Так мы распространяем идею перехода
                                    на электро по всему миру!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutpage__fourth">
            </section>
            <section className="aboutpage__video d-flex align-center justify-center flex-column">
                <iframe className="aboutpage__main"
                src="https://www.youtube.com/embed/T1_QF5Q660k">
                </iframe>
                <h3 className="aboutpage__video-title">ЭЛЕКТРОМОБИЛЬ HONDA X-NV УЖЕ В БИШКЕКЕ!</h3>
                <img src={light_line} alt=""/>
            </section>
            <section className="aboutpage__footer d-flex align-center justify-center flex-column">
                <div className="container d-flex align-center justify-center flex-column">
                    <h2 className="section__title">
                        желаете встретиться лично?
                    </h2>
                    <img src={light_line} alt="" />
                    <p className="section__subtitle"> Оставьте пожалуйста свой номер, и наши менеджеры свяжутся с вами для утверждения даты и времени встречи.</p>
                    <div className="aboutpage__form_block">
                        <form className='aboutpage__form_form'>
                            <div className="testdrive__form_info">
                                <input type="text" className='testdrive__form_input' placeholder="ФИО"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="tel" className='testdrive__form_input' placeholder="Телефон"/>
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

export default About