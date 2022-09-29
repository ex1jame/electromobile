import { NewsPage } from './NewsPage';
import React, { useEffect, useState } from "react"
import about__car from '../images/car_2 2.png'
import left_arrow from '../images/Left_arrow.png'
import right_arrow from '../images/Right_arrow.png'
import light_line from '../images/light_line.png'
import news_1 from '../images/news_1.png'
import news_2 from '../images/news_2.png'
import news_3 from '../images/news_3.png'
import 'animate.css';
import volkswagen from '../images/Volkswagen.png'
import credit_car from '../images/credit.png'
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import { _LINK } from '../data/Data'
import { generatePath, Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Footer } from './Footer'
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, HashNavigation, Pagination } from 'swiper';
import { FormBlock } from './FormBlock';
import mainvi from '../images/mainvi.mp4'
import backg from '../images/video.png'
import { FormBlockMain } from './FormBlockMain';

const MainPage = ({ setIsLight }) => {

    const [mob, setMob] = useState(true)
    SwiperCore.use([Autoplay])

    useEffect(() => {
        setIsLight(false)
        const getCars = async () => {
            const { data } = await axios(`${_LINK}/v1/api/user/car/categories`)
            setCars(data)
        }
        getCars()
        if (window.screen.width < 821) {
            setMob(false)
        }

        const getMainPage = async () => {
            const { data } = await axios(`${_LINK}/v1/api/page/mainpage`)
            console.log(data)
            setMain(data)
        }
        getMainPage()
    }, [])



    const [main, setMain] = useState({})
    const [cars, setCars] = useState([])
    const [vygodno, setVygodno] = useState(false)
    const [eco, setEco] = useState(false)
    const [patri, setPatri] = useState(false)
    const [present, setPresent] = useState(false)
    const navigate = useNavigate()


    const [hide, setHide] = useState(false)

    const [activeSlide, setActiveSlide] = useState(0)
    const [afterChange, setAfterChange] = useState(0)

    const [start, setStart] = useState(false)

    const [formOn, setFormOn] = useState(false)

    useEffect(() => {
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

    const handleBolder = (str) => {
        if (str) {
            if (str.includes("<b>")) {
                return (<span className='bold'>{str.substring(3)} </span>)
            } else {
                return (str + " ")
            }
        }
        return ""
    }

    return (
        <div className="mainpage">
            <section className="hero d-flex justify-center flex-column align-items">
                <video playsInline autoPlay muted loop className='hero__vid' poster={`${_LINK}/v1/api/file/${main?.videoBack?.name}`}>
                    {(main?.video && main?.videoOn) && <source src={`${_LINK}/v1/api/file/${main?.video.name}`} type="video/mp4" />}
                </video>
                <div className="hero__main container d-flex align-center justify-center  flex-column z-100">
                    {/* <h1 className="hero__title">Переходи на <span className="bold">электро</span></h1> */}
                    <h1 className="hero__title">{main?.title?.split(" ").map(el => handleBolder(el))}</h1>
                    <h2 className="hero__subtitle ">{main?.subtitle}</h2>
                </div>
                <button className="orange_btn z-100" onClick={() => { setFormOn(true); window.scrollTo(0, 0) }}>Оставить заявку</button>
            </section>
            {
                formOn && <div className='form__overlay' ><FormBlockMain setOnForm={setFormOn} /><div onClick={() => setFormOn(false)} className='form__over'></div></div>
            }

            <Swiper
                slidesPerView={1}
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
                className="slider_page"
                loop={true}
                autoplay={{
                    delay: 3000
                }}
                speed={1500}

            >
                <SwiperSlide>
                    <div className="d-flex justify-center align-center">
                        <div className="drive d-flex flex-column align-center   justify-center">
                            <h2 className="section__title"><img src={light_line} alt="" className="section__img" />
                                {main?.firstTitle}
                            </h2>
                            <p className="slider_page-subtitle">
                                {main?.firstDesc?.split(" ").map((el) => {
                                    if (el.includes("<br>")) {
                                        return (<br></br>)
                                    } else {
                                        return (el + " ")
                                    }
                                })}
                            </p>
                            <img src={main?.firstFile ? `${_LINK}/v1/api/file/${main?.firstFile?.name}` : volkswagen} alt="" className="drive__img" />
                            <HashLink to="/testdrive#testdrive`"><button className="orange_btn">Записаться</button></HashLink>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="d-flex justify-center align-center">
                        <div className="drive d-flex flex-column align-center   justify-center">
                            <h2 className="section__title">{main?.secondTitle}
                                <img src={light_line} alt="" className="section__img" /></h2>
                            <p className="slider_page-subtitle">
                                {main?.secondDesc?.split(" ").map((el) => {
                                    if (el.includes("<br>")) {
                                        return (<br></br>)
                                    } else {
                                        return (el + " ")
                                    }
                                })}
                            </p>
                            <img src={main?.secondFile ? `${_LINK}/v1/api/file/${main?.secondFile?.name}` : credit_car} alt="" className="drive__img" />
                            <HashLink to="/diler#root"><button className="orange_btn">Подробнее</button></HashLink>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <section className="about">
                <h2 className="section__title text-right">ПОЧЕМУ НЕОБХОДИМ
                    ЭЛЕКТРОМОБИЛЬ?</h2>
                <div className="about__main d-flex ">
                    <img src={main?.thirdSectionFile ? `${_LINK}/v1/api/file/${main?.thirdSectionFile?.name}` : about__car} alt="" className="about__img" />
                    <div className="about__info">
                        <div className="about__flex align-center" onClick={() => {
                            setVygodno(!vygodno)
                            setEco(false)
                            setPatri(false)
                            setPresent(false)

                        }}>
                            <p className="about__num about__num-right">01</p>
                            <p className="about__title">{main?.stepFirstTitle}</p>


                        </div>
                        {
                            vygodno && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        {main?.stepFirstDesc}</p>

                                </div>)
                        }
                        <div className="about__flex align-center" onClick={() => {

                            setVygodno(false)
                            setEco(!eco)
                            setPatri(false)
                            setPresent(false)


                        }}>
                            <p className="about__num">02</p>
                            <p className="about__title">{main?.stepSecondTitle}</p>
                        </div>
                        {
                            eco && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        {main?.stepSecondDesc}</p>

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
                            <p className="about__title">{main?.stepThirdTitle}</p>
                        </div>
                        {
                            patri && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        {main?.stepThirdDesc}</p>

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
                            <p className="about__title">{main?.stepFourthTitle}</p>
                        </div>
                        {
                            present && (
                                <div className="about__block">
                                    <p className="about__click animate__animated animate__fadeInRight">
                                        {main?.stepFourthDesc}</p>
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
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={-170}
                                    pagination={{
                                        clickable: true,

                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                    speed={1500}
                                    breakpoints={{
                                        // when window width is >= 640px
                                        300: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        },
                                        // when window width is >= 768px
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        820: {
                                            slidesPerView: 2,
                                            spaceBetween: -80
                                        },
                                        1024: {
                                            spaceBetween: -90
                                        },
                                        1280: {
                                            spaceBetween: -100
                                        },
                                        1366: {
                                            spaceBetween: -100
                                        },
                                        1430: {
                                            spaceBetween: -100
                                        },
                                        1530: {
                                            spaceBetween: -130
                                        }
                                    }}
                                    modules={[HashNavigation]}
                                    hashNavigation={false}
                                >
                                    {
                                        el?.cars?.map((car, idx) => (
                                            <SwiperSlide key={idx} onClick={() => {
                                                const path = generatePath(`/cars/${car.id}`)
                                                navigate(path)
                                                window.scrollTo(0, 0);
                                            }}>
                                                <Link to={`/cars`} style={{ display: "block" }} className="crossover__block">
                                                    <p className="crossover__subtitle">{car?.brand}</p>
                                                    <img src={`${_LINK}/v1/api/file/${car?.miniPhoto?.name}`} alt="" className="crossover__img-block" />
                                                </Link>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                            </div>
                        )
                    })
                }
            </Carousel>

            <NewsPage fTitle={main?.videos} sTitle={main?.news} light_line={light_line} news_1={news_1} news_2={news_2} news_3={news_3} />
            <Footer />
        </div>
    )

}


export default MainPage