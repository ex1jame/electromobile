import '../style/tracking.css'
import React, {useEffect} from 'react'
import '../style/media.css'
import tracking_map from "../images/tracking_map.png"
import light_line from "../images/light_line.png";
import graf from "../images/График.svg"



const Tracking = ({setIsLight}) => {

    useEffect(() => {
        setIsLight(false)
    }, [])

    return (
        <div>
            <section className="tracking__hero">
                <div className="container">
                    <h2 className="section__title"><img src={light_line} alt="" className="section__img"/>
                        ТРЕКИНГ-КАРТА ДЛЯ ОТСЛЕЖИВАНИЯ МАШИНЫ
                    </h2>
                    <p className="tracking__hero_subtitle">После отправки заявки менеджер утвердит дату и время
                        встречи</p>
                    <div className="d-flex justify-center flex-column">

                        <form action="" className="tracking__hero_form">
                            <input type="text" className="tracking__hero_input"/>
                            <button className="orange_btn">Отследить</button>
                        </form>
                        <p className="tracking__hero_desc">Трек-код - уникальный идентификатор товара, который
                            используется для отслеживания статуса
                            текущего отправления. Данный код индивидуальный и дается при заключении договора на
                            приобретение электромобиля.</p>
                        <div className="tracking__hero_block">
                            <div className="tracking__hero_main">
                                <div className="tracking__hero_track">
                                    <div className="tracking__hero_line">
                                        <div className="tracking__hero_eclipse eclipse_active"></div>
                                        <div className="tracking__hero_eclipse"></div>
                                        <div className="tracking__hero_eclipse"></div>
                                        <div className="tracking__hero_eclipse"></div>
                                        <div className="tracking__hero_eclipse"></div>

                                    </div>
                                </div>
                                <div className="tracking__hero_info">
                                    <p className="tracking__hero_text">22.04.22 | Поиск машины, Шанхай</p>
                                    <p className="tracking__hero_text">24.04.22 | Оформление документации</p>
                                    <p className="tracking__hero_text">25.04.22 | Перевод средств поставщику, отправка
                                        машины в Хоргос</p>
                                    <p className="tracking__hero_text">7.05.22 | Прибытие в Хоргос, карантин</p>
                                    <p className="tracking__hero_text">15.05.22 | Переход машины через границу с
                                        Республикой Казахстан</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Tracking