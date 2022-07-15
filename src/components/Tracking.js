import React, {useEffect, useState} from 'react'
import light_line from "../images/light_line.png";
import axios from 'axios';
import { _LINK } from '../data/Data';
import { Footer } from './Footer';

const Tracking = ({setIsLight}) => {

    const [code, setCode] = useState("")
    const [steps, setSteps] = useState([])

    useEffect(() => {
        setIsLight(false)
    }, [])

    const getApplication = async () => {
        const config = {
            method: 'get',
            url: `${_LINK}/v1/api/user/step/code/${code}`
        }
        try {
            const { data } = await axios(config)
            setSteps(data)
        } catch (e) {
            alert("Неверно введен код")
        }
    }

    return (
        <div className="tracking">
            <section className="tracking__hero">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img"/>
                        ТРЕКИНГ-КАРТА ДЛЯ ОТСЛЕЖИВАНИЯ МАШИНЫ
                    </h2>
                    <p className="tracking__hero_subtitle">После отправки заявки менеджер утвердит дату и время
                        встречи</p>
                    <div className="d-flex justify-center flex-column">

                        <form action="" className="tracking__hero_form">
                            <input type="text" className="tracking__hero_input" onInput={(e) => setCode(e.target.value)}/>
                            <button className="orange_btn" onClick={(e) => {
                                e.preventDefault()
                                getApplication()
                            }}>Отследить</button>
                        </form>
                        <p className="tracking__hero_desc">Трек-код - уникальный идентификатор товара, который
                            используется для отслеживания статуса
                            текущего отправления. Данный код индивидуальный и дается при заключении договора на
                            приобретение электромобиля.</p>
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
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Tracking