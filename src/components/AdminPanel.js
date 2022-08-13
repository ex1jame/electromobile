import React, { useEffect, useState } from 'react'
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom'
import { _LINK } from '../data/Data'
import axios from 'axios'
import { MenuBlock } from './MenuBlock'
import { useSelector } from 'react-redux'

export const AdminPanel = ({height}) => {

	const [back, setBack] = useState({})

	const seo = useSelector(store => store.seo.seo)

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
				<img src={`${_LINK}/v1/api/file/${seo?.logoFile?.name}` } alt="" />
			</div>
			<div className="admin__home d-flex align-center">
				<Link to='/admin' className="admin__subtitle ">Главная</Link>
			</div>
			<div className="admin__nav">
				<p className="admin__text">MENU</p>
				<MenuBlock
					links={[
						{ link: "/categories", text: "Категории" },
						{ link: "/vehicle", text: "Машины" }]}
					name="Машины"
				/>
				<div className="admin__block">
					<h5 className="admin__subtitle">Заявки</h5>
					<Link to="/application/1" className="admin__desc">Тест-драйв <span className="admin__warn">{back.c1}</span></Link>
					<Link to="/application/2" className="admin__desc">Оформление заказов <span className="admin__warn">{back.c2}</span></Link>
					<Link to="/application/3" className="admin__desc">Кредит <span className="admin__warn">{back.c3}</span></Link>
					<Link to="/application/4" className="admin__desc">Консультация <span className="admin__warn">{back.c4}</span></Link>
					<Link to="/application/5" className="admin__desc">Дилерам <span className="admin__warn">{back.c5}</span></Link>
				</div>
				<MenuBlock
					links={[
						{ link: "/news", text: "Новости" }, 
						{ link: "/videos", text: "Видео" }
					]}
					name="Новости и видео"
				/>
				<MenuBlock 
					links={[
						{ link: "/create-tracking", text: "Создание" }, 
						{ link: "/list-tracking", text: "Список" }, 
						{ link: "/list-tracking-closed", text: "Завершенные" }]} 
					name="Трекинг"
				/>
				<MenuBlock
					links={[
						{ link: "/seo", text: "Настройки" }]}
					name="SEO настройки"
				/>
				<MenuBlock
					links={[
						{ link: "/icons", text: "Иконки" }]}
					name="Соцсети"
				/>
				<MenuBlock
					links={[
						{ link: "/page-about", text: "О нас слайдер"},
						{ link: "/admin-about", text: "О нас" },
						{ link: "/admin-credit", text: "Кредитование"},
						{ link: "/admin-dealer", text: "Дилерам" },
						{ link: "/admin-main", text: "Главная"},
						{ link: "/admin-test", text: "Тест-драйв"},
						{ link: "/admin-tracking", text: "Трекинг"}
					]}
					name="Страницы"
				/>
			</div>
		</header>
	)
}