import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import { AdminPanel } from './AdminPanel'
import axios from 'axios'
import { _LINK } from '../data/Data'
import { logoutAction } from '../redux/actions/login'

const Create = ({ setDisplay }) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    const [categories, setCategories] = useState([])
    const [car, setCar] = useState({})
    const [main, setMain] = useState({})
    const [secondary, setSecondary] = useState({})
    const [third, setThird] = useState({})
    const [mini, setMini] = useState({})
    const [gallery, setGallery] = useState([])
    const [fFirst, setFFirst] = useState({})
    const [fSecond, setFSecond] = useState({})
    const [fThird, setFThird] = useState({})
    const [fFourth, setFFourth] = useState({})

    useEffect(() => {
        const get = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/car/category`,
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            }
            try {
                const { data } = await axios(config)
                setCategories(data)
            } catch (e) {
                alert(e)
            }
        }
        get()
    }, [])

    const handleInput = (e) => {
        const { id, value } = e.target
        if (value && id) setCar({ ...car, [id]: value })
    }

    const dispatch = useDispatch()

    const handleSend = async () => {
        const config = {
            method: 'post',
            url: `${_LINK}/v1/api/car/create`,
            headers: {
                'Authorization': localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(car)
        }
        try {
            const { data } = await axios(config)
            if (main?.name) {
                await addImage(main, "main", data.id)
            }
            if (secondary?.name) {
                await addImage(secondary, "second", data.id)
            }
            if (third?.name) {
                await addImage(third, "third", data.id)
            }
            if (mini?.name) {
                await addImage(mini, "mini", data.id)
            }
            if (fFirst?.name) {
                await addImage(fFirst, "fourth/first", data.id)
            }
            if (fSecond?.name) {
                await addImage(fSecond, "fourth/second", data.id)
            }
            if (fThird?.name) {
                await addImage(fThird, "fourth/third", data.id)
            }
            if (fFourth?.name) {
                await addImage(fFourth, "fourth/fourth", data.id)
            }
            if (gallery?.length) {
                for (let i = 0; i < gallery.length; i++) {
                    await addImage(gallery[i], "addToGallery", data.id)
                }
            }
            alert("Запись создана")
            window.location.reload();
        } catch (e) {
            alert(e)
        }
    }

    const addImage = async (file, name, id) => {
        const formData = new FormData()
        formData.append(
            'file',
            file,
            file.name
        )
        await axios.post(`${_LINK}/v1/api/car/${name}/${id}`, formData, {
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
        })
    }

    const handleInputImage = (e) => {
        const { id, files } = e.target
        if (files?.length) {
            switch (id) {
                case "main": setMain(files[0])
                    break;
                case "second": setSecondary(files[0])
                    break;
                case "mini": setMini(files[0])
                    break;
                case "third": setThird(files[0])
                    break;
                case "addToGallery": setGallery(files)
                    break;
                case "fFirst" : setFFirst(files[0])
                    break;
                case "fSecond" : setFSecond(files[0])
                    break;
                case "fThird" : setFThird(files[0])
                    break;
                case "fFourth" : setFFourth(files[0])
                    break;
            }
        }
    }

    const { isAuth } = useSelector(store => store.login)

    if (isAuth) {
        return (
            <div className="create">
                <AdminPanel height={4} />
                <section className="admin__hero">
                    <div className="admin__hero_header ">
                        <div className="admin__hero_admin">
                            <span style={{ color: "#FFF", fontSize: "20px", cursor: "pointer" }}
                                onClick={() => {
                                    dispatch(logoutAction())
                                }}
                            >Logout</span>
                        </div>
                    </div>
                    <div className="admin__create_block">
                        <h3 className="admin__categories_title">
                            Adding new material
                        </h3>
                        <div className="admin__categories_header">
                            <p className="admin__categories_head">Adding new material</p>
                            <div className="admin__seo_main d-flex">
                                <div className="admin__seo_col d-flex flex-column">
                                    <label className="admin__create_label">Марка</label>
                                    <input type="text" className="admin__seo_electro car_brand" placeholder="Марка" id="brand" onInput={handleInput} />
                                    <label className="admin__create_label">Мини-описание</label>
                                    <input type="text" className="admin__seo_electro car_mini_desc" placeholder="Описание..." id="miniDesc" onInput={handleInput} />
                                    <label className="admin__create_label">Длинное-описание</label>
                                    <input type="text" className="admin__seo_electro car_long_desc" placeholder="Описание..." id="longDesc" onInput={handleInput} />
                                    <label className="admin__create_label">Год выпуска</label>
                                    <input type="text" className="admin__seo_electro car_wheel_drive" placeholder="2020" id="yearCreated" onInput={handleInput} />
                                    <label className="admin__create_label">Привод</label>
                                    <input type="text" className="admin__seo_electro car_wheel_drive" placeholder=" привод" id="wheelDrive" onInput={handleInput} />
                                    <label className="admin__create_label">запас хода (NEDC)</label>
                                    <input type="text" className="admin__seo_electro car_range" placeholder="запас хода (NEDC)" id="maxRange" onInput={handleInput} />
                                    <label className="admin__create_label">мощность электродвигателя</label>
                                    <input type="text" className="admin__seo_electro car_motor_power" placeholder="мощность электродвигателя" id="motorPower" onInput={handleInput} />
                                    <label className="admin__create_label">емкость батареи</label>
                                    <input type="text" className="admin__seo_electro car_battery_power" placeholder="емкость батареи" id="batteryPower" onInput={handleInput} />
                                    <label className="admin__create_label">макс. скорость</label>
                                    <input type="text" className="admin__seo_electro car_max_speed" placeholder=" макс. скорость" id="maxSpeed" onInput={handleInput} />
                                    <label className="admin__create_label">Время до полного заряда</label>
                                    <input type="text" className="admin__seo_electro car_charge_time" placeholder="Время до полного заряда" />
                                    <label className="admin__create_label">крутящий момент двигателя</label>
                                    <input type="text" className="admin__seo_electro car_engine_torque" placeholder="крутящий момент двигателя" />
                                    <label className="admin__create_label">цвета</label>
                                    <input type="text" className="admin__seo_electro car_color" placeholder="цвета" id="color" onInput={handleInput} />
                                    <label className="admin__create_label">базовая цена</label>
                                    <input type="text" className="admin__seo_electro car_base_price" placeholder="базовая цена" id="basePrice" onInput={handleInput} />
                                    <label className="admin__create_label">цена при полной комплектации</label>
                                    <input type="text" className="admin__seo_electro car_full_price" placeholder="цена при полной комплектации" id="fullPrice" onInput={handleInput} />
                                    <label className="admin__create_label">макс. крутящий момент</label>
                                    <input type="text" className="admin__seo_electro car_max_torque" placeholder="макс. крутящий момент" id="maxTorque" onInput={handleInput} />
                                    <label className="admin__create_label">размеры кузова</label>
                                    <input type="text" className="admin__seo_electro car_body_size" placeholder="размеры кузова" id="bodySize" onInput={handleInput} />
                                    <label className="admin__create_label">размер колес</label>
                                    <input type="text" className="admin__seo_electro car_wheel_size" placeholder="размер колес" id="wheelSize" onInput={handleInput} />
                                    <label className="admin__create_label">колесная база</label>
                                    <input type="text" className="admin__seo_electro car_wheelbase" placeholder="колесная база" id="wheelbase" onInput={handleInput} />
                                    <label className="admin__create_label"> снаряженная масса</label>
                                    <input type="text" className="admin__seo_electro car_curb_weight" placeholder=" снаряженная масса" id="curbWeight" onInput={handleInput} />
                                    <label className="admin__create_label">клиренс</label>
                                    <input type="text" className="admin__seo_electro car_clearance" placeholder="клиренс" id="clearance" onInput={handleInput} />
                                    <label className="admin__create_label">приборная панель</label>
                                    <input type="text" className="admin__seo_electro car_dashboard" placeholder="приборная панель" id="dashboard" onInput={handleInput} />
                                    <label className="admin__create_label">4 фото, Текст №1</label>
                                    <input type="text" className="admin__seo_electro car_dashboard" placeholder="приборная панель" id="carText1" onInput={handleInput} />
                                    <label className="admin__create_label">4 фото, Текст №2</label>
                                    <input type="text" className="admin__seo_electro car_dashboard" placeholder="климат-контроль" id="carText2" onInput={handleInput} />
                                    <label className="admin__create_label">4 фото, Текст №3</label>
                                    <input type="text" className="admin__seo_electro car_dashboard" placeholder="бесключевой запуск" id="carText3" onInput={handleInput} />
                                    <label className="admin__create_label">4 фото, Текст №4</label>
                                    <input type="text" className="admin__seo_electro car_dashboard" placeholder="круиз-контроль" id="carText4" onInput={handleInput} />
                                    <span className="admin__seo_line"></span>
                                    <button className="admin__seo_btn" onClick={handleSend}>Сохранить</button>
                                </div>
                                <div className="admin__seo_images">
                                    <div>
                                        <label className="admin__seo_icon">Категория</label><br></br>
                                        <select className='admin__select' id="carCategory" onInput={handleInput}>
                                            <option>
                                                Выберите категорию
                                            </option>
                                            {
                                                categories.map(el => (
                                                    <option value={el.id} key={el.id}>
                                                        {el.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        <br></br>
                                        <br></br>
                                    </div>

                                    <label className="admin__seo_icon">Главное фото</label>
                                    <div className=""></div>
                                    <input id="main" type="file" className="admin__seo_file car_main_photo" onInput={handleInputImage} />

                                    <label className="admin__seo_icon">Второе фото</label>
                                    <div className="">

                                    </div>
                                    <input id="second" type="file" className="admin__seo_file car_second_photo" onInput={handleInputImage} />

                                    <label className="admin__seo_icon">Третье фото</label>
                                    <div className="">

                                    </div>
                                    <input id="third" type="file" className="admin__seo_file car_third_photo" onInput={handleInputImage} />

                                    <label className="admin__seo_icon">Мини фото</label>
                                    <div className="">

                                    </div>
                                    <input id="mini" type="file" className="admin__seo_file car_mini_photo" onInput={handleInputImage} />
                                    <label className="admin__seo_icon">4 фото №1</label>
                                    <div className="">

                                    </div>
                                    <input id="fFirst" type="file" className="admin__seo_file car_mini_photo" onInput={handleInputImage} />
                                    <label className="admin__seo_icon">4 фото №2</label>
                                    <div className="">

                                    </div>
                                    <input id="fSecond" type="file" className="admin__seo_file car_mini_photo" onInput={handleInputImage} />
                                    <label className="admin__seo_icon">4 фото №3</label>
                                    <div className="">

                                    </div>
                                    <input id="fThird" type="file" className="admin__seo_file car_mini_photo" onInput={handleInputImage} />
                                    <label className="admin__seo_icon">4 фото №4</label>
                                    <div className="">

                                    </div>
                                    <input id="fFourth" type="file" className="admin__seo_file car_mini_photo" onInput={handleInputImage} />
                                    
                                    <label className="admin__seo_icon">Галерея</label>
                                    <div className="">

                                    </div>
                                    <input id="addToGallery" type="file" className="admin__seo_file card_gallery" onInput={handleInputImage} multiple />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } else {
        return <Login />
    }
}

export default Create