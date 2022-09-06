import React, {useEffect, useState} from 'react'
import axios from "axios"
import { _LINK } from '../data/Data';
import { Footer } from './Footer';

const Dileram = ({setIsLight}) => {

    useEffect(() => {
        setIsLight (false)
        const getDilerPage = async () => {
            const { data } = await axios(`${_LINK}/v1/api/page/dealer`)
            console.log(data)
            setDilerPage(data)
        }
        getDilerPage()
    }, [])

    const [request, setRequest] = useState({ isCalled: false, category: 5 })
    const [dilerPage, setDilerPage] = useState({})

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

    return (

        <div className="diler">
            <section className="diler__hero d-flex justify-center align-center">
                <div className="container">
                    <h2 className="section__title">
                        {dilerPage?.formTitle}
                    </h2>
                    <p className="section__subtitle">{dilerPage?.formDesc}</p>\
                    <div className="diler__form_block">
                        <form className='diler__form_form'>
                            <div className="diler__form_info">

                                <input type="text" className='testdrive__form_input' placeholder="ФИО" onInput={handleAddData} id="fullName" />
                                <span className="testdrive__form_span"></span>
                            </div>
                            <div className="diler__form_info">

                                <input type="tel" className='testdrive__form_input' placeholder="Телефон" onInput={handleAddData} id="phone" />
                                <span className="testdrive__form_span"></span>
                            </div>
                            <p className="diler__form_desc">
                                После отправки заявки менеджер утвердит дату и время встречи
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
export default Dileram