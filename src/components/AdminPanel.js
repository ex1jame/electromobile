import React, { useEffect, useState } from 'react'
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom'
import { _LINK } from '../data/Data'
import axios from 'axios'

export const AdminPanel = ({height}) => {

	const [back, setBack] = useState({})

	useEffect(() => {
		const getApplications = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/request/all`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				console.log(data)
				setBack(data)
			} catch (e) {
				alert(e)
			}
		}
		getApplications()
	}, [])
	
	return (
		<header className="admin__header" >
			<div className="admin__header-sm" style={{ height: `${height ? height : 109}px` }}>
				<img src={logo} alt="" />
			</div>
			<div className="admin__home d-flex align-center">
				<Link to='/admin' className="admin__subtitle ">Главная</Link>
			</div>
			<div className="admin__nav">
				<p className="admin__text">MENU</p>
				<div className="admin__block">
					<h5 className="admin__subtitle">Машины</h5>
					<Link to="/categories" className="admin__desc">Категории</Link>
					<Link to="/vehicle" className="admin__desc">Машины</Link>
				</div>
				<div className="admin__block">
					<h5 className="admin__subtitle">Заявки</h5>
					<Link to="/application/1" className="admin__desc">Тест-драйв <span className="admin__warn">{back.c1}</span></Link>
					<Link to="/application/2" className="admin__desc">Оформление заказов <span className="admin__warn">{back.c2}</span></Link>
					<Link to="/application/3" className="admin__desc">Кредит <span className="admin__warn">{back.c3}</span></Link>
					<Link to="/application/4" className="admin__desc">Консультация <span className="admin__warn">{back.c4}</span></Link>
					<Link to="/application/5" className="admin__desc">Дилерам <span className="admin__warn">{back.c5}</span></Link>
				</div>
				{/* <div className="admin__block">
					<h5 className="admin__subtitle">Кредитование</h5>
					<p className="admin__desc">Категории</p>
					<p className="admin__desc">Машины</p>
				</div>
				<div className="admin__block">
					<h5 className="admin__subtitle">Новости и видео</h5>
					<p className="admin__desc">Категории</p>
					<p className="admin__desc">Машины</p>
				</div>
				<div className="admin__block">
					<h5 className="admin__subtitle">Слайдеры</h5>
					<p className="admin__desc">Категории</p>
					<p className="admin__desc">Машины</p>
				</div> */}
				<div className="admin__block">
					<h5 className="admin__subtitle">Трекинг</h5>
					<Link to="/create-tracking" className="admin__desc">Создание</Link>
					<Link to="/list-tracking" className="admin__desc">Список</Link>
					<Link to="/list-tracking-closed" className="admin__desc">Завершенные</Link>
				</div>
				<div className="admin__block">
					<h5 className="admin__subtitle">SEO настройки</h5>
					<Link to="/seo" className='admin__desc'>Настройки</Link>
				</div>
				<div className="admin__block">
					<h5 className="admin__subtitle">Соцсети</h5>
					<Link to="/icons" className='admin__desc'>Иконки</Link>
				</div>

			</div>
		</header>
	)
}