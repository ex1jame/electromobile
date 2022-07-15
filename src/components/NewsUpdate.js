import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { _LINK } from '../data/Data';
import { logoutAction } from '../redux/actions/login';
import { AdminPanel } from './AdminPanel';
import Login from './Login';

export const NewsUpdate = ({ setDisplay }) => {

	const [text, setText] = useState("")
	const [link, setLink] = useState("")
	const [file, setFile] = useState({})
	const [news, setNews] = useState({})

	const { isAuth } = useSelector(store => store.login)

	const { dispatch } = useDispatch()

	useEffect(() => {
		const get = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/user/news/id/${id}`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setNews(data)
				setText(data?.text)
				setLink(data?.link)
			} catch (e) {
				alert(e)
			}
		}
		get()
	}, [])

	const { id } = useParams()

	const handleCreateNews = async () => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/request/news`,
			headers: {
				'Authorization': localStorage.getItem("token"),
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({id, text, link, file: news.file, category: 1 })
		}
		try {
			const { data } = await axios(config)
			if (file.name) {
				addImage(data.id)
			} 
			alert("Запись создана")
			window.location.reload()
		} catch (e) {
			alert(e)
		}
	}

	const addImage = async (id) => {
		const formData = new FormData()
		formData.append(
			'file',
			file,
			file.name
		)
		await axios.post(`${_LINK}/v1/api/request/news/${id}/img`, formData, {
			headers: {
				'Authorization': localStorage.getItem("token"),
			}
		})
	}

	useEffect(() => {
		setDisplay(true)
	}, [])

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
					<div className="admin__news-create-block">
						<p className="admin__categories_head">Adding new news</p>
						<div className="admin__news-create">
							<label className="admin__create_label">Название:</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={news?.text}
								onInput={(e) => setText(e.target.value)}
							/>
							<label className="admin__create_label">Ссылка на новость</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={news?.link}
								onInput={(e) => setLink(e.target.value)}
							/>
							<label className="admin__create_label">Картинка</label>
							<div className='admin__news-img'>
								<img src={`${_LINK}/v1/api/file/${news?.file?.name}`} alt="" />
							</div>
							<input type="file" className="admin__seo_electro car_brand"
								onInput={(e) => setFile(e.target.files[0])}
							/>
							<button className="admin__seo_btn" style={{ marginLeft: "15px", height: "45px" }} onClick={handleCreateNews}>Сохранить</button>
						</div>
					</div>
				</section>

			</div>
		)
	}
	else {
		return <Login />
	}
}