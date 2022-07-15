import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { _LINK } from '../data/Data';
import { logoutAction } from '../redux/actions/login';
import { AdminPanel } from './AdminPanel';
import Login from './Login';

export const AboutAdmin = ({setDisplay}) => {

	const [imgs, setImgs] = useState([])

	useEffect(() => {
		setDisplay(true)
		const get = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/page/about/slider/all`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setImgs(data)
			} catch (e) {
				alert(e)
			}
		}
		get()
	}, [])

	const [file, setFile] = useState({})
	const { isAuth } = useSelector(store => store.login)

	const { dispatch } = useDispatch()

	const handleSend = async () => {
		if (file?.name) {
			const formData = new FormData()
			formData.append(
				'file',
				file,
				file.name
			)
			try {
				await axios.post(`${_LINK}/v1/api/page/about/slider`, formData, {
					headers: {
						'Authorization': localStorage.getItem("token"),
					}
				})
				window.location.reload()
			} catch (e) {
				alert(e)
			}
		}
	}

	const handleDelete = async (id) => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/page/about/slider/delete/${id}`,
			headers: {
				'Authorization': localStorage.getItem("token")
			}
		}
		try {
			const { data } = await axios(config)
			alert("Запись удалена")
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
					<div className="admin__categories_block ">
						<div className="table__block table__categories">
							<div>
								<p className="admin__categories_head">About us</p>
								<div className="admin__seo_main d-flex">
									<div className="admin__seo_col d-flex flex-column">
										<label className="admin__create_label">Добавить фото в галерею</label>
										<input type="file" className="admin__seo_electro car_brand" placeholder="Имя" onInput={(e)=>setFile(e.target.files[0])} />
										<button className="admin__seo_btn" onClick={handleSend}>Сохранить</button>
										<br></br>
										<br></br>
										<br></br>
										<div className='admin__grid-slider'>
											{
												imgs?.map((el, idx) => (
													<div className='admin__slider-img' key={idx}>
														<span onClick={() => handleDelete(el.id)}>X</span>
														<img src={`${_LINK}/v1/api/file/${el?.file?.name}`} alt="" />
													</div>
												))
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
		)
	}
	else {
		return <Login/>
	}
}