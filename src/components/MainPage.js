import React, { useEffect, useState } from "react"
import '../style/media.css'
import '../style/App.css'
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
import 'animate.css';

import instagram from '../images/Instagram.png'
import whatsapp from '../images/Whatsapp.png'
import youtube from '../images/Youtube.png'
import telegram from '../images/Telegram.png'
import volkswagen from '../images/Volkswagen.png'
import credit_car from '../images/credit.png'
// requires a loader

import { Carousel } from 'react-responsive-carousel';
import NewCarousel from "react-simply-carousel"

import bg from '../images/cross_bg.png'
import axios from 'axios'
import { _LINK } from '../data/Data'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Footer } from './Footer'


const MainPage = ({ setIsLight }) => {

    const [mob, setMob] = useState(true)

    useEffect(() => {
        setIsLight(false)
        const getCars = async () => {
            const { data } = await axios(`${_LINK}/v1/api/user/car/categories`)
            console.log(data)
            setCars(data)
        }
        getCars()
        if (window.screen.width < 821) {
            setMob(false)
        }
    }, [])

    const [cars, setCars] = useState([])
    const [vygodno, setVygodno] = useState(false)
    const [eco, setEco] = useState(false)
    const [patri, setPatri] = useState(false)
    const [present, setPresent] = useState(false)

    const [hide, setHide] = useState(false)

    const [activeSlide, setActiveSlide] = useState(0)
    const [afterChange, setAfterChange] = useState(0)

    const [start, setStart] = useState(false)

    useEffect(() => {
        console.log(activeSlide)
        containerWidth()
    }, [activeSlide])

    const containerWidth = () => {
        const arr = document?.querySelectorAll(".sl_container")
        arr.forEach(el => {
            const sl_container = el?.childNodes[1]
            if (sl_container?.style) {
                sl_container.style.maxWidth = "100%";
                (window.screen.width > 1366) && (sl_container.style.minHeight = "414px");
            }
        })
        
    }

    useEffect(() => {
        setTimeout(() => {
            setStart(true)
        }, 1000)
    }, [])

    return (
        <div className="mainpage">
            <section className="hero d-flex justify-center flex-column align-items">
                <div className="hero__main container d-flex align-center justify-center  flex-column">
                    <h1 className="hero__title">Авто <span className="bold">твоего</span> города</h1>
                    <h2 className="hero__subtitle ">Будь одним из первых</h2>
                </div>
                <HashLink to="/cars#cars"><button className="orange_btn">Оформить заказ</button></HashLink>
            </section>
            <Carousel className="slider_page"
                showArrows={false}
                showIndicators={false}
                autoPlay={start}
                interval={4000}
                transitionTime={2000}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                swipeable={mob}

            >
                <div className="d-flex justify-center align-center">
                    <div className="drive d-flex flex-column align-center   justify-center">
                        <h2 className="section__title"><img src={light_line} alt="" className="section__img" />
                            ТЕСТ-ДРАЙВ
                        </h2>
                        <p className="slider_page-subtitle">
                            Мы предоставляем возможность лично прочувствовать электромобиль
                        </p>
                        <img src={volkswagen} alt="" className="drive__img" />
                        <HashLink to="/testdrive#testdrive`"><button className="orange_btn">Записаться</button></HashLink>
                    </div>
                </div>
                <div className="d-flex justify-center align-center">
                    <div className="drive d-flex flex-column align-center   justify-center">
                        <h2 className="section__title">КРЕДИТОВАНИЕ
                            <img src={light_line} alt="" className="section__img" /></h2>
                        <p className="slider_page-subtitle">
                            Мы предоставляем возможность автокредитования на наши<br />
                            электромобили от различных банков
                        </p>
                        <img src={credit_car} alt="" className="drive__img" />
                        <HashLink to="/credit#credit"><button className="orange_btn">Подробнее</button></HashLink>
                    </div>
                </div>
            </Carousel>
            <section className="about">
                <h2 className="section__title text-right">ПОЧЕМУ НЕОБХОДИМ
                    ЭЛЕКТРОМОБИЛЬ?</h2>
                <div className="about__main d-flex ">
                    <img src={about__car} alt="" className="about__img" />
                    <div className="about__info">
                        <div className="about__flex align-center" onClick={() => {
                            setVygodno(!vygodno)
                            setEco(false)
                            setPatri(false)
                            setPresent(false)

                        }}>
                            <p className="about__num about__num-right">01</p>
                            <p className="about__title">Выгодно</p>


                        </div>
                        {
                            vygodno && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        Ездить на электромобиле в 35 раз дешевле. Буквально
                                        за сумму от 10-20 тысяч долларов вы становитесь обладателем совсем нового «свежего»
                                        автомобиля, вместо подержанного импортного авто, купленного на задворках развитых
                                        стран. Ну и огромная экономия на топливе,</p>

                                </div>)
                        }
                        <div className="about__flex align-center" onClick={() => {

                            setVygodno(false)
                            setEco(!eco)
                            setPatri(false)
                            setPresent(false)


                        }}>
                            <p className="about__num">02</p>
                            <p className="about__title">экологично</p>
                        </div>
                        {
                            eco && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        Никаких выхлопов. Став обладателем электромобиля,
                                        вы перестаете загрязнять атмосферу нашего любимого города. В Кыргызстане 93%
                                        электроэнергии приходится
                                        на чистые энергоисточники как гидроэнергетика. Электромобили же используют эту
                                        чистую энергию.</p>

                                </div>
                            )


                        }
                        <div className="about__flex align-center" onClick={() => {

                            setVygodno(false)
                            setEco(false)
                            setPatri(!patri)
                            setPresent(false)

                        }}>
                            <p className="about__num">03</p>
                            <p className="about__title">патриотично</p>
                        </div>
                        {
                            patri && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        Использование собственной электроэнергии. Деньги потраченные на бензин каждый месяц
                                        плавно перетекают в Россию в то время, когда наши соотечественники кровью и потом
                                        зарабатывают эти деньги и отправляют на родину. Используя электромобиль,
                                        мы оставляем эти деньги у себя в стране, ведь электроэнергию производим мы сами.</p>

                                </div>
                            )
                        }
                        <div className="about__flex align-center" onClick={() => {

                            setVygodno(false)
                            setEco(false)
                            setPatri(false)
                            setPresent(!present)

                        }}>
                            <p className="about__num">04</p>
                            <p className="about__title">презентабельно</p>
                        </div>
                        {
                            present && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        Будьте первыми. Электромобили это уже наступление будущего. Будучи пионерами в
                                        использовании электромобилей вы одним из первых ощутите современные технологии в
                                        своей повседневной жизни. Внимание друзей и знакомых к вашему выбору машины будет
                                        обеспечено в ближайшие 2 года</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>

            <Carousel className="crossover "
                showArrows={true}
                showIndicators={true}
                transitionTime={2000}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                onRequestChange={containerWidth}
                swipeable={mob}
                
            >
                {
                    cars?.filter(el => el?.cars?.length).map((el, idx) => {
                        return (
                            <div className="container" key={idx}>
                                <h2 className="section__title "><img
                                    src={left_arrow} alt="" className="crossover__img-left " />{el?.category}<img
                                        src={right_arrow} alt="" className="crossover__img-right " />
                                    <img src={light_line} className="section__img" /></h2>
                                <div className='overlay'></div>
                                <NewCarousel
                                    containerProps={{
                                        style: {
                                            maxWidth: "1560px",
                                            padding: "0 20px",
                                            margin: "175px auto 135px"
                                        },
                                        className: "sl_container"
                                    }}
                                    responsiveProps={[
                                        // {maxWidth : 820, containerProps: {
                                        //     maxWidth: "1350px"
                                        // }}
                                        // {maxWidth : 821, containerProps : {
                                        //     background: "red"
                                        // }}
                                        {
                                            maxWidth: 820,
                                            minWidth: 768,
                                            itemsToShow: 1,
                                            containerProps : {
                                                style: {
                                                    maxWidth: "600px !important"
                                                }
                                            }
                                        }
                                    ]}
                                    activeSlideIndex={activeSlide}
                                    onRequestChange={(id) => {
                                        setHide(true)
                                        setActiveSlide(id)
                                    }}
                                    onAfterChange={(id) => {
                                        setHide(false)
                                        setAfterChange(id)
                                    }}
                                    activeSlideProps={{
                                        style: {
                                            fontStyle: "italic"
                                        }
                                    }}
                                    itemsToShow={3}
                                    itemsToScroll={1}
                                    speed={500}
                                    easing="linear"
                                >
                                    {
                                        el?.cars?.map((car, idx) => (
                                            <div className={`${hide ? "animate__fadeOu" : "animate__fadeI"} animate__animated ${(activeSlide === (idx + 2) ? "zero-opacity" : "")}`}
                                                style={(afterChange === idx + 1 && hide) ? {} : {}}
                                                key={idx}
                                            >
                                                <div className={`${(afterChange === idx) ? "crossover__main-block" : "crossover__block"} animate__animated`}>
                                                    <p className="crossover__subtitle">{car?.brand}</p>
                                                    <img src={`${_LINK}/v1/api/file/${car?.miniPhoto?.name}`} alt="" className="crossover__img-block" />
                                                </div>
                                            </div>
                                        ))
                                    }

                                </NewCarousel>
                            </div>
                        )
                    })
                }
            </Carousel>

            <section className="news">
                <div className="container">
                    <p className="section__title">ВИДЕО-ОБЗОРЫ И отзывы <img src={light_line} className="section__img" /></p>
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
                    <p className="section__title">новости <img src={light_line} className="section__img" /></p>
                    <div className="news__grid">
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_1} alt="" />
                            </div>
                            <p className="news__subtitle">
                                Toyota Motor 9 ноября провела презентацию своего первого массового электромобиля bZ4X
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_2} alt="" />
                            </div>
                            <p className="news__subtitle">
                                Компания Subaru представила первый электрический автомобиль
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_3} alt="" />
                            </div>
                            <p className="news__subtitle">
                                Geely показала конкурента электрического грузовика Tesla
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )

}


export default MainPage