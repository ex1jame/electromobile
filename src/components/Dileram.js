import '../style/diler.css'
import React, {useEffect} from 'react'
import light_line from "../images/light_line.png";
import '../style/media.css'


const Dileram = ({setIsLight}) => {

    useEffect(() => {
        setIsLight (false)
    }, [])

    return (

        <div className="diler">
            <section className="diler__hero d-flex justify-center align-center">
                <div className="container">
                    <h2 className="section__title">
                        ТРЕКИНГ-КАРТА ДЛЯ ОТСЛЕЖИВАНИЯ МАШИНЫ
                    </h2>
                    <p className="section__subtitle">Если вы решили приобрести официальный статус дилера компании “Электромобиль”,
                        вам необходимо подать заявку, чтобы запланировать личную встречу. Успейте присоединиться к нам по выгодным условиям!</p>\
                    <div className="diler__form_block">
                        <form className='diler__form_form'>
                            <div className="diler__form_info">

                                <input type="text" className='testdrive__form_input' placeholder="ФИО"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="diler__form_info">

                                <input type="tel" className='testdrive__form_input' placeholder="Телефон"/>
                                <span className="testdrive__form_span"></span>
                            </div>
                            <p className="diler__form_desc">
                                После отправки заявки менеджер утвердит дату и время встречи
                            </p>
                        </form>
                        <button className="orange_btn">ЗАПИСАТЬСЯ</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Dileram