import React, { useEffect, useState } from 'react'
import light_line from "../images/light_line.png";
import axios from 'axios';
import { _LINK } from '../data/Data';
import { Footer } from './Footer';
import SwiperCore, { Autoplay, Navigation, Scrollbar } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

const Tracking = ({ setIsLight }) => {

    const [code, setCode] = useState("")
    const [steps, setSteps] = useState([])
    const [trackign, setTracking] = useState({})
    const [images, setImages] = useState([])
    SwiperCore.use([Autoplay])

    useEffect(() => {
        setIsLight(false)

        const getTrackingPage = async () => {
            const { data } = await axios(`${_LINK}/v1/api/page/tracking`)
            // console.log("tracking", data)
            setTracking(data)
        }
        getTrackingPage()
    }, [])

    const getApplication = async () => {
        const config = {
            method: 'get',
            url: `${_LINK}/v1/api/user/step/code/${code}`
        }
        try {
            const { data } = await axios(config)
            console.log("steps", steps)
            setSteps(data)
        } catch (e) {
            alert("Неверно введен код")
        }
    }

    return (
        <div className="tracking">
            <section className="tracking__hero">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img" />
                        {trackign?.title}
                    </h2>
                    <p className="tracking__hero_subtitle">{trackign?.subtitle}</p>
                    <div className="d-flex justify-center flex-column">

                        <form action="" className="tracking__hero_form">
                            <input type="text" className="tracking__hero_input" onInput={(e) => setCode(e.target.value)} />
                            <button className="orange_btn" onClick={(e) => {
                                e.preventDefault()
                                getApplication()
                            }}>Отследить</button>
                        </form>
                        <p className="tracking__hero_desc">{trackign?.description}</p>
                        {
                            steps.length && <div className="tracking__hero_block animate__animated animate__fadeInDown">
                                <div className="tracking__hero_main">
                                    <div className="tracking__hero_track">
                                        <div className="tracking__hero_line">
                                            {
                                                steps?.map((el, idx) => (
                                                    <div key={idx} className={`tracking__hero_eclipse ${idx === 0 && "eclipse_active"}`}></div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="tracking__hero_info">
                                        {
                                            steps?.map((el, idx) => (
                                                <p key={idx} className="tracking__hero_text">{el?.name}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    <Swiper
                        className='tracking__slider'
                        slidesPerView={2}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3000
                        }}
                        speed={500}
                        modules={[Navigation, Scrollbar]}
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            820: {
                                slidesPerView: 2,
                            },
                            1024: {
                                spaceBetween: 40
                            },
                            1200: {
                                spaceBetween: 100
                            },
                            1366: {
                                spaceBetween: 30
                            }

                        }}
                    >
                        {
                            steps[0]?.tracker?.files?.map((el, idx) => (
                                <SwiperSlide key={el.id}>
                                    <div className="tracking__slide">
                                        <img src={`${_LINK}/v1/api/file/${el?.name}`} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Tracking