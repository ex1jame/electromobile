import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import SwiperCore, { Autoplay, Navigation, Scrollbar } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { _LINK } from '../data/Data';
export function NewsPage({
    light_line
}) {

    SwiperCore.use([Autoplay])
    const [news1, setNews1] = useState({})
    const [news2, setNews2] = useState({})
    const [news3, setNews3] = useState({})
    const [articles, setArticles] = useState([])
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        const get = async (num) => {
            const conf = {
                "method": "get",
                "url": `${_LINK}/v1/api/user/news/${num}`
            }
            try {
                const { data } = await axios(conf)
                switch (data?.num) {
                    case 1: setNews1(data)
                        break
                    case 2: setNews2(data)
                        break
                    case 3: setNews3(data)
                        break
                }
            } catch (e) {
                console.log(e)
            }
        }
        get(1)
        get(2)
        get(3)
        const getArticles = async () => {
            const conf = {
                "method": "get",
                "url": `${_LINK}/v1/api/user/news/category/1`
            }
            try {
                const { data } = await axios(conf)
                setArticles(data)
            } catch (e) {
                console.log(e)
            }
        }
        getArticles()
    }, [])

    return <section className="news">
        <div className="container">
            <p className="section__title">ВИДЕО-ОБЗОРЫ И отзывы <img src={light_line} className="section__img" /></p>
            <div className="news__grid">
                <div className="news__block">
                    <iframe className='news__video' src={news1?.link}>
                    </iframe>
                    <p className="news__subtitle">
                        {news1?.text}
                    </p>
                </div>
                <div className="news__block">
                    <iframe className='news__video' src={news2?.link}>
                    </iframe>
                    <p className="news__subtitle">
                        {news2?.text}
                    </p>
                </div>
                <div className="news__block">
                    <iframe className='news__video' src={news3?.link}>
                    </iframe>
                    <p className="news__subtitle">
                        {news3?.text}
                    </p>
                </div>
            </div>
            <p className="section__title">новости <img src={light_line} className="section__img" /></p>
            <div className="news__articles-cont">
                <Swiper
                    className='news__articles'
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    ref={sliderRef}
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
                            slidesPerView: 3,
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
                        articles?.map(el => (
                            <SwiperSlide key={el.id}>
                                <NavLink to={`/article/${el?.id}`} target="_blank" className="news__block">
                                    <div className="news__content">
                                        <img src={`${_LINK}/v1/api/file/${el?.file?.name}`} alt="" />
                                    </div>
                                    <p className="news__subtitle">
                                        {
                                            el?.text
                                        }
                                    </p>
                                </NavLink>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="sw-prev-arrow" onClick={handlePrev} />
                <div className="sw-next-arrow" onClick={handleNext} />
            </div>


        </div>
    </section>;
}
