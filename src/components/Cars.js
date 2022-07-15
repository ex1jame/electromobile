import React, { useCallback, useRef, useState } from 'react'
import {Carousel} from 'react-responsive-carousel';
import light_line from "../images/light_line.png";
import {useEffect} from 'react'
import left_arrow from '../images/Left_arrow.svg'
import right_arrow from '../images/right_arr.svg'
import axios from 'axios';
import { _LINK } from '../data/Data';
import { Footer } from './Footer';
import { FormBlock } from './FormBlock';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const Cars = ({setIsBlack}) => {

    const { id } = useParams()

    const [car, setCar] = useState({})

    useEffect(() => {
        setIsBlack(true)
        const get = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/user/car/id/${id}`
            }
            const { data } = await axios(config)
            setCar(data)
        }
        get()
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

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    
    return (
        <div className="cars">
            <section className="cars__hero" id="cars-nav" style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${_LINK}/v1/api/file/${car?.mainPhoto?.name}) no-repeat center/cover`}}>
                <div className="cars__back_media"></div>
                <div className="cars__info_back">
                    <div className="container">
                        <div className="cars__text d-flex justify-center align-center flex-column">
                            <h1 className="cars__title">{car?.brand}</h1>
                            <h2 className="cars__subtitle">{car?.miniDesc}</h2>
                        </div>
                        <div className="cars__hero_grid">
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">{car?.maxRange} <span className="cars__hero_subtitle">км</span></p>
                                <p className="cars__hero_subtitle">запас хода (NEDC)</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">{car?.batteryPower} <span className="cars__hero_subtitle">кВ/ч</span></p>
                                <p className="cars__hero_subtitle">емкость батареи</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">{car?.motorPower?.split(" ")[0]} <span
                                    className="cars__hero_subtitle">кВ/ч/</span>{car?.motorPower?.split(" ")[1]}<span
                                    className="cars__hero_subtitle"> л.с.</span></p>
                                <p className="cars__hero_subtitle">мощность электродвигателя</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__hero_title">{car?.maxTorque} <span className="cars__hero_subtitle">н.м.</span>
                                </p>
                                <p className="cars__hero_subtitle">макс. крутящий момент</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cars__about" style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${_LINK}/v1/api/file/${car?.secondPhoto?.name}) no-repeat center/cover`}}>
                <div className="cars__info_back">
                    <div className="container">
                        <div className="cars__text d-flex justify-center align-center flex-column">
                            <h2 className="cars__subtitle">Honda M-NV идеально подходит для передвижения по городу
                                и для выездов на природу</h2>
                        </div>
                        <div className="cars__hero_grid">
                            <div className="cars__hero_col">
                                <p className="cars__about_title">{car?.bodySize} <span
                                    className="cars__hero_subtitle">мм </span></p>
                                <p className="cars__hero_subtitle">размеры кузова</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">{car?.wheelSize}</p>
                                <p className="cars__hero_subtitle">размер колес</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">{car?.wheelbase} <span className="cars__hero_subtitle">мм</span>
                                </p>
                                <p className="cars__hero_subtitle">колесная база </p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">{car?.curbWeight} <span className="cars__hero_subtitle">кг</span>
                                </p>
                                <p className="cars__hero_subtitle">снаряженная масса</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cars__info" style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${_LINK}/v1/api/file/${car?.thirdPhoto?.name}) no-repeat center/cover`}}>
                <div className="cars__info_back">
                    <div className="container">
                        <div className="cars__text d-flex justify-center align-center flex-column">
                        </div>
                        <div className="cars__hero_grid">
                            <div className="cars__hero_col">
                                <p className="cars__info_title">{car?.clearance} <span className="cars__hero_subtitle">см </span></p>
                                <p className="cars__info_subtitle">клиренс</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__info_title">{car?.wheelDrive}</p>
                                <p className="cars__info_subtitle">привод</p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__info_title">{car?.color}</p>
                                <p className="cars__info_subtitle">цвета </p>
                            </div>
                            <div className="cars__hero_col">
                                <p className="cars__about_title">{car?.maxSpeed} <span className="cars__hero_subtitle">км/ч</span>
                                </p>
                                <p className="cars__info_subtitle">макс. скорость</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cars__test">
                <div className="cars__test_shadow">
                    <div className="cars__test_grid">
                        <div className="cars__test_first d-flex">
                            <h4 className="cars__test_title">{car?.dashboard} <span className="cars__test_subtitle">дюймов</span></h4>
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
                <Swiper
                    slidesPerView={1}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                    className="cars__slider_carousel"
                    loop={true}
                    autoplay={{
                        delay: 3000
                    }}
                    speed={1500}
                    modules={[Autoplay]}
                    ref={sliderRef}
                >
                    {
                        car?.gallery?.map((el,idx) => (
                            <SwiperSlide className='cars__slide_page' key={idx}>
                                <div className='cars__slide_img'>
                                    <img src={`${_LINK}/v1/api/file/${el?.name}`} alt="" />
                                    <div className="sw-prev-arrow" onClick={handlePrev} />
                                    <div className="sw-next-arrow" onClick={handleNext} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
                
            </section>
            <section className="credit__form" id="cars">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img" />
                        СВЯЗЬ С НАМИ
                    </h2>
                    <p className="credit__form_subtitle">
                        Заполните заявку и с вами свяжется наш менеджер
                        для подтверждения данной информации
                    </p>
                    <FormBlock />
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Cars