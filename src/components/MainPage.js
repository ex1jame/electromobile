import React from "react"

import about__car from '../images/car_2 2.png'
import left_arrow from '../images/Left_arrow.png'
import right_arrow from '../images/Right_arrow.png'
import light_line from '../images/light_line.png'
import news_1 from '../images/news_1.png'
import news_2 from '../images/news_2.png'
import news_3 from '../images/news_3.png'
import car_1 from '../images/car_1.png'
import car_2 from '../images/car_2.png'
import car_3 from '../images/car_3.png'
import car_4 from '../images/car_4.png'


import instagram from '../images/Instagram.png'
import whatsapp from '../images/Whatsapp.png'
import youtube from '../images/Youtube.png'
import telegram from '../images/Telegram.png'
import volkswagen from '../images/Volkswagen.png'
import credit_car from '../images/credit.png'
// requires a loader

import {Carousel} from 'react-responsive-carousel';


const MainPage = () => {
    return (
        <div>
            <section className="hero d-flex justify-center flex-column align-items">
                <div className="hero__main d-flex align-center justify-center  flex-column">
                    <h1 className="hero__title">Авто <span class="bold">твоего</span> города</h1>
                    <h2 className="hero__subtitle">Будь одним из первых</h2>
                </div>
                <button className="orange_btn">Оформить заказ</button>
            </section>
            <Carousel className="slider_page"
                      showArrows={false}
                      showIndicators={false}
                      autoPlay
                      interval={1500}
                      transitionTime={2000}
                      showThumbs={false}
                      showStatus={false}
                      infiniteLoop
                      emulateTouch

            >
                <div className="d-flex justify-center align-center">
                    <div className="drive">
                        <h2 className="section__title"><img src={light_line} alt="" className="section__img"/>
                            ТЕСТ-ДРАЙВ
                        </h2>
                        <p className="slider_page-subtitle">
                            Мы предоставляем возможность лично прочувствовать электромобиль
                        </p>
                        <img src={volkswagen} alt="" className="drive__img"/>\
                        <button className="orange_btn">Записаться</button>
                    </div>
                </div>
                <div className="d-flex justify-center align-center">
                    <div className="drive">
                        <h2 className="section__title">КРЕДИТОВАНИЕ
                            <img src={light_line} alt="" className="section__img"/></h2>
                        <p className="slider_page-subtitle">
                            Мы предоставляем возможность автокредитования на наши<br/>
                            электромобили от различных банков
                        </p>
                        <img src={credit_car} alt="" className="drive__img"/>
                        <button className="orange_btn">Подробнее</button>
                    </div>
                </div>
            </Carousel>
            <section className="about">
                <h2 className="section__title text-right">ПОЧЕМУ НЕОБХОДИМ
                    ЭЛЕКТРОМОБИЛЬ?</h2>
                <div className="about__main d-flex ">
                    <img src={about__car} alt="" class="about__img"/>
                    <div className="about__info">
                        <div className="about__flex align-center">
                            <p className="about__num about__num-right">01</p>
                            <p className="about__title">Выгодно</p>
                        </div>
                        <div className="about__flex align-center">
                            <p className="about__num">02</p>
                            <p className="about__title">экологично</p>
                        </div>
                        <div className="about__flex align-center">
                            <p className="about__num">03</p>
                            <p className="about__title">патриотично</p>
                        </div>
                        <div className="about__flex align-center">
                            <p className="about__num">04</p>
                            <p className="about__title">презентабельно</p>
                        </div>
                    </div>
                </div>
            </section>

            <Carousel className="crossover"
                      showArrows={true}
                      showIndicators={false}
                      transitionTime={2000}
                      showThumbs={false}
                      showStatus={false}
                      infiniteLoop

            >
                <div className="container">
                    <h2 className="section__title"><img src={left_arrow} className="crossover__img-left"/>Кроссоверы<img
                        src={right_arrow} alt="" className="crossover__img-right"/>
                        <img src={light_line} class="section__img"/></h2>

                    <Carousel className="crossover__carousel"
                              showArrows={false}
                              showIndicators={true}
                              transitionTime={2000}
                              showThumbs={true}
                              infiniteLoop
                              showStatus={false}

                              emulateTouch>
                        <div className="crossover__grid">
                            <p className="crossover__link">Модельный ряд</p>
                            <div className="crossover__main-block">
                                <p className="crossover__title">HONDA X-NV</p>
                                <img src={car_1} alt="" className="crossover__img"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Chery EQ5</p>
                                <img src={car_2} alt="" className="crossover__img-block"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Honda M-NV</p>
                                <img src={car_4} alt="" className="crossover__img-block-2"/>
                            </div>
                        </div>
                        <div className="crossover__grid">
                            <p className="crossover__link">Модельный ряд</p>
                            <div className="crossover__main-block">
                                <p className="crossover__title">HONDA X-NV</p>
                                <img src={car_1} alt="" className="crossover__img"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Chery EQ5</p>
                                <img src={car_2} alt="" className="crossover__img-block"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Honda M-NV</p>
                                <img src={car_3} alt="" className="crossover__img-block-2"/>
                            </div>
                        </div>
                        <div className="crossover__grid">
                            <p className="crossover__link">Модельный ряд</p>
                            <div className="crossover__main-block">
                                <p className="crossover__title">HONDA X-NV</p>
                                <img src={car_1} alt="" className="crossover__img"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Chery EQ5</p>
                                <img src={car_2} alt="" className="crossover__img-block"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Honda M-NV</p>
                                <img src={car_3} alt="" className="crossover__img-block-2"/>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="container">
                    <h2 className="section__title"><img src={left_arrow} className="crossover__img-left"/>Универсал<img
                        src={right_arrow} alt="" className="crossover__img-right"/></h2>
                    <Carousel className="crossover__carousel"
                              showArrows={false}
                              showIndicators={true}
                              transitionTime={2000}
                              showThumbs={true}
                              infiniteLoop
                              showStatus={false}

                              emulateTouch>
                        <div className="crossover__grid">
                            <p className="crossover__link">Модельный ряд</p>
                            <div className="crossover__main-block">
                                <p className="crossover__title">HONDA X-NV</p>
                                <img src={car_1} alt="" className="crossover__img"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Chery EQ5</p>
                                <img src={car_2} alt="" className="crossover__img-block"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Honda M-NV</p>
                                <img src={car_4} alt="" className="crossover__img-block-2"/>
                            </div>
                        </div>
                        <div className="crossover__grid">
                            <p className="crossover__link">Модельный ряд</p>
                            <div className="crossover__main-block">
                                <p className="crossover__title">HONDA X-NV</p>
                                <img src={car_1} alt="" className="crossover__img"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Chery EQ5</p>
                                <img src={car_2} alt="" className="crossover__img-block"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Honda M-NV</p>
                                <img src={car_3} alt="" className="crossover__img-block-2"/>
                            </div>
                        </div>
                        <div className="crossover__grid">
                            <p className="crossover__link">Модельный ряд</p>
                            <div className="crossover__main-block">
                                <p className="crossover__title">HONDA X-NV</p>
                                <img src={car_1} alt="" className="crossover__img"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Chery EQ5</p>
                                <img src={car_2} alt="" className="crossover__img-block"/>
                            </div>
                            <div className="crossover__block">
                                <p className="crossover__subtitle">Honda M-NV</p>
                                <img src={car_3} alt="" className="crossover__img-block-2"/>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </Carousel>
            <section className="news">
                <div className="container">
                    <p className="section__title">ВИДЕО-ОБЗОРЫ И отзывы <img src={light_line} class="section__img"/></p>
                    <div className="news__grid">
                        <div className="news__block">
                            <iframe className='news__video'
                                    src="https://www.youtube.com/embed/hANvpkObrq0">
                            </iframe>
                            <p className="news__subtitle">
                                ТОП-3 электромобиля! Обзор! Хочу электро!
                            </p>
                        </div>
                        <div className="news__block">
                            <iframe className='news__video'
                                    src="https://www.youtube.com/embed/BD7fA0fP5zI">
                            </iframe>
                            <p className="news__subtitle">
                                ТОП-3 электромобиля! Обзор! Хочу электро!
                            </p>
                        </div>
                        <div className="news__block">
                            <iframe className='news__video'
                                    src="https://www.youtube.com/embed/Wvz3BojHeSE">
                            </iframe>
                            <p className="news__subtitle">
                                ТОП-3 электромобиля! Обзор! Хочу электро!
                            </p>
                        </div>
                    </div>
                    <p className="section__title">новости <img src={light_line} className="section__img"/></p>
                    <div className="news__grid">
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_1} alt=""/>
                            </div>
                            <p class="news__subtitle">
                                Toyota Motor 9 ноября провела презентацию своего первого массового электромобиля bZ4X
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_2} alt=""/>
                            </div>
                            <p class="news__subtitle">
                                Компания Subaru представила первый электрический автомобиль
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_3} alt=""/>
                            </div>
                            <p className="news__subtitle">
                                Geely показала конкурента электрического грузовика Tesla
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="footer_main">
                    <h3 className="section__title">КОНТАКТЫ</h3>
                    <div className="footer__flex">
                        <div className="footer__block">
                            <p className="footer__title">Телефоны:</p>
                            <p className="footer__title">Адрес:</p>
                            <p className="footer__title">Соц. сети:</p>
                        </div>
                        <div className="footer__block">
                            <p className="footer__subtitle">+996 755 055 865</p>
                            <p className="footer__subtitle">г. Бишкек, ул. Раззакова 32</p>
                            <div className="footer__grid">
                                <span className="footer__eclipse"><img src={instagram} alt=""/></span>
                                <span className="footer__eclipse"><img src={youtube} alt=""/></span>
                                <span className="footer__eclipse"><img src={whatsapp} alt=""/></span>
                                <span className="footer__eclipse"><img src={telegram} alt=""/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}


export default MainPage