import React, { useCallback, useRef, useState } from 'react'
import light_line from "../images/light_line.png";
import { useEffect } from 'react'
import { _LINK } from '../data/Data';
import axios from 'axios';
import { Footer } from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';


const About = ({ setIsLight }) => {

    SwiperCore.use([Autoplay, Pagination])

    const [video, setVideo] = useState({})
    const [imgs, setImgs] = useState([])
    const [about, setAbout] = useState({})

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
        setIsLight(false)
        const get = async (num) => {
            const conf = {
                "method": "get",
                "url": `${_LINK}/v1/api/user/news/${num}`,
                "headers": {
                    "Authorization": localStorage.getItem("token")
                }
            }
            try {
                const { data } = await axios(conf)
                setVideo(data)
            } catch (e) {
                console.log(e)
            }
        }
        get(4)

        const get2 = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/user/about/slider/all`,
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            }
            const { data } = await axios(config)
            setImgs(data)
        }
        get2()

        const getAboutPage = async () => {
            const { data } = await axios(`${_LINK}/v1/api/page/aboutpage`)
            console.log(data)
            setAbout(data)
        }
        getAboutPage()
    }, [])

    const [request, setRequest] = useState({ isCalled: false, category: 4 })

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

    const textWriter = (str) => {
        if (str.includes("<br>")) {
            return (<br/>)
        } else {
            return (str + " ")
        }
    }

    return (
        <div className="aboutpage">
            <section className="aboutpage__hero black__media d-flex " style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.51)), url(${_LINK}/v1/api/file/${about?.first?.name})`}}>
                <div className="black__media">
                    <div className="container">
                        <div className="aboutpage__info">
                            <h1 className="aboutpage__title-sm-2 aboutpage__title">{about?.title}</h1>
                            {/* <div className='about__shadow-img1'>
                                <img src={el1} alt="" />
                            </div> */}
                            <div className="aboutpage__grid">
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.firstOne?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.firstTwo?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.firstThree?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aboutpage__about  d-flex" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.51)), url(${_LINK}/v1/api/file/${about?.second?.name})` }}>
                <div className="black__media_about">
                    <div className="container">
                        <div className="aboutpage__info">
                            {/* <div className='about__shadow-img2'>
                                <img src={el2} alt="" />
                            </div> */}
                            <div className="aboutpage__grid">
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.secondOne?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                                <div className="aboutpage__col">
                                    {/* <p className="aboutpage__desc">в страны ЕАЭС.
                                        <br />
                                        <br />
                                        С нами вы можете купить различные электромобили, начиная с дорогих брендов, как
                                        Mercedes или Tesla, и заканчивая экономичными моделями от BYD и Changan.
                                    </p> */}
                                    <p className="aboutpage__desc">{about?.secondTwo?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.secondThree?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutpage__third black__media d-flex" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.51)), url(${_LINK}/v1/api/file/${about?.third?.name})` }}>
                <div className="black__media_third">
                    <div className="container">
                        <div className="aboutpage__info">
                            {/* <div className='about__shadow-img3'>
                                <img src={el3} alt="" />
                            </div> */}
                            <h1 className="aboutpage__title ">{about?.thirdTitle}</h1>
                            <div className="aboutpage__grid">
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.thirdOne?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.thirdTwo?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                                <div className="aboutpage__col">
                                    <p className="aboutpage__desc">{about?.thirdThree?.split(" ").map(el => textWriter(el))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="news__articles-cont2">
                <Swiper
                    slidesPerView={1}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                    className="aboutpage__slider"
                    loop={true}
                    ref={sliderRef}
                    autoplay={{
                        delay: 3000
                    }}
                    modules={[Navigation, Scrollbar]}
                    speed={1500}
                >
                    {
                        imgs?.map((el, idx) => (
                            <SwiperSlide className='aboutpage__slide' key={idx}>
                                <img src={`${_LINK}/v1/api/file/${el?.file?.name}`} alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div style={{ zIndex: 2 }} className="sw-prev-arrow" onClick={handlePrev} />
                <div style={{ zIndex: 2 }} className="sw-next-arrow" onClick={handleNext} />
            </div>
            <section className="aboutpage__video d-flex align-center justify-center flex-column">
                <iframe className="aboutpage__main"
                    src={video?.link}>
                </iframe>
                <h3 className="aboutpage__video-title">{video?.text}</h3>
                <img src={light_line} alt="" />
            </section>
            <section className="aboutpage__footer d-flex align-center justify-center flex-column">
                <div className="container d-flex align-center justify-center flex-column" id="order">
                    <h2 className="section__title">
                        {about?.formTitle}
                    </h2>
                    <img src={light_line} alt="" />
                    <p className="section__subtitle">{about?.formDesc}</p>
                    <div className="aboutpage__form_block">
                        <form className='aboutpage__form_form'>
                            <div className="testdrive__form_info">
                                <input type="text" className='testdrive__form_input' placeholder="ФИО" onInput={handleAddData} id="fullName" />
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="testdrive__form_info">
                                <input type="tel" className='testdrive__form_input' placeholder="Телефон" onInput={handleAddData} id="phone" />
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

export default About