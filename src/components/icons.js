import '../style/categ.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import { AdminPanel } from './AdminPanel'
import { logoutAction } from '../redux/actions/login'
import { _LINK } from '../data/Data'
import axios from 'axios'
const Icons = ({ setDisplay }) => {

    useEffect(() => {
        setDisplay(true)
    }, [])

    const dispatch = useDispatch()


    const { isAuth } = useSelector(store => store.login)

    const [telegram, setTelegram] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [youtube, setYoutube] = useState("")
    const [inst, setInstagram] = useState("")

    useEffect(() => {
        const get = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/user/socials`
            }
            try {
                const { data } = await axios(config)
                setTelegram(data?.telegram)
                setWhatsapp(data?.whatsapp)
                setYoutube(data?.youtube)
                setInstagram(data?.inst)
            } catch (e) {
                alert(e)
            }
        }
        get()
    }, [])

    const handleSave = async () => {
        const config = {
            method: 'post',
            url: `${_LINK}/v1/api/request/socials`,
            headers: {
                'Authorization': localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({id: 1, inst, youtube, whatsapp, telegram})
        }
        try {
            const { data } = await axios(config)
            alert("Ссылка добавлена")
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    if (isAuth) {
        return (
            <div className="admin">
                <AdminPanel />
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
                    <div className="admin__icons_block">
                        <h3 className="admin__categories_title">
                            Соцсети
                        </h3>
                        <div className="admin__categories_header ">
                            <p className="admin__categories_head">Иконки</p>
                        </div>
                        <div className="table__block">
                            <table className="table ">
                                <thead className="table__header_block">
                                    <tr className="table__header_flex">
                                        <th className="table__id">ID</th>
                                        <th className="table__name">Название</th>
                                        <th className="table__num">Ссылка</th>

                                        <th className="table__option">Option</th>
                                    </tr>
                                </thead>
                                <tbody className="table__block_body">
                                    <tr className="table__header_flex">
                                        <td className="table__block_id">1</td>
                                        <td className="table__block_name">Telegram</td>
                                        <td className="table__block_num"> <input type="text" value={telegram} onInput={(e) => setTelegram(e.target.value)} className='table-inp'/>   </td>
                                        <td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
                                    </tr>
                                    <tr className="table__header_flex">
                                        <td className="table__block_id">2</td>
                                        <td className="table__block_name">Whatsapp</td>
                                        <td className="table__block_num"> <input type="text" value={whatsapp} onInput={(e) => setWhatsapp(e.target.value)} className='table-inp' />    </td>
                                        <td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
                                    </tr>
                                    <tr className="table__header_flex">
                                        <td className="table__block_id">3</td>
                                        <td className="table__block_name">Youtube</td>
                                        <td className="table__block_num">  <input type="text" value={youtube} onInput={(e) => setYoutube(e.target.value)} className='table-inp' />    </td>
                                        <td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
                                    </tr>
                                    <tr className="table__header_flex">
                                        <td className="table__block_id">5</td>
                                        <td className="table__block_name">Instagram</td>
                                        <td className="table__block_num">   <input type="text" value={inst} onInput={(e) => setInstagram(e.target.value)} className='table-inp' />   </td>
                                        <td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        )
    } else {
        return <Login />
    }
}

export default Icons