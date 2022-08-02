import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _LINK } from '../data/Data';
import { AdminPanel } from './AdminPanel';
import Login from './Login';
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import { NavLink, useParams } from 'react-router-dom';
import { logoutAction } from '../redux/actions/login';

export const EditTracking = ({ setDisplay }) => {

	const [list, setList] = useState([])
	const [tracker, setTracker] = useState({})
	const [newStep, setNewStep] = useState("")
	const [files, setFiles] = useState([])

	const { code, id } = useParams()

	useEffect(() => {
		setDisplay(true)
		const getTracking = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/tracker/step/code/${code}`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				console.log(data)
				setList(data)
			} catch (e) {
				alert(e)
			}
		}
		getTracking()

		const getTracker = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/tracker/id/${id}`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setTracker(data)
			} catch (e) {
				alert(e)
			}
		}
		getTracker()
	}, [])

	const handleAdd = async () => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/tracker/step/create`,
			headers: {
				'Authorization': localStorage.getItem("token"),
				"Content-Type": "application/json"
			},
			data: JSON.stringify({ id, name: newStep })
		}
		try {
			const { data } = await axios(config)
			alert("Запись добавлена")
			window.location.reload()
		} catch (e) {
			alert(e)
		}
	}

	const deleteStep = async (id) => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/tracker/step/delete/${id}`,
			headers: {
				'Authorization': localStorage.getItem("token"),
				"Content-Type": "application/json"
			}
		}
		try {
			const { data } = await axios(config)
			window.location.reload()
		} catch (e) {
			alert(e)
		}
	}

	const { isAuth } = useSelector(store => store.login)

	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [isClosed, setIsClosed] = useState("")

	const handleChange = async () => {
		if (name != "") {
			const user = tracker
			user.fullName = name
			setTracker(user)
		}
		if (phone != "") {
			const user = tracker
			user.phone = phone
			setTracker(user)
		}

		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/tracker/update`,
			headers: {
				'Authorization': localStorage.getItem("token"),
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(tracker)
		}
		try {
			const { data } = await axios(config)

		} catch (e) {
			alert(e)
		}

		if (isClosed) {
			if (isClosed === "open") {
				const config = {
					method: 'post',
					url: `${_LINK}/v1/api/tracker/open/${tracker.id}`,
					headers: {
						'Authorization': localStorage.getItem("token")
					}
				}
				try {
					const { data } = await axios(config)
				} catch (e) {
					alert(e)
				}
			} else if (isClosed === "close") {
				const config = {
					method: 'post',
					url: `${_LINK}/v1/api/tracker/close/${tracker.id}`,
					headers: {
						'Authorization': localStorage.getItem("token")
					}
				}
				try {
					const { data } = await axios(config)
				} catch (e) {
					alert(e)
				}
			}
		}

	}

	const { dispatch } = useDispatch()

	const handleSend = async () => {
		try {
			for (let i = 0; i < files.length; i++) {
				await addFile(files[i], `/tracker/file/${id}`)
			}
			alert("Фотографии добавлены")
			window.location.reload()
		} catch (e) {
			alert(e)
		}
	}

	const addFile = async (file, path) => {
		const formData = new FormData()
		formData.append(
			'file',
			file,
			file.name
		)
		await axios.post(`${_LINK}/v1/api${path}`, formData, {
			headers: {
				'Authorization': localStorage.getItem("token"),
			}
		})
	}

	const handleDeleteImage = async (fileId) => {
		try {
			const config = {
				method: 'post',
				url: `${_LINK}/v1/api/tracker/delete/file/${id}/${fileId}`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			const { data } = await axios(config)
			alert("Изображение удалено")
			window.location.reload()
		} catch(e) {
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
							<div className='d-flex'>
								<input placeholder={tracker.fullName} className="admin__code" onInput={e => setName(e.target.value)} />
								<input placeholder={tracker.phone} className="admin__code" onInput={e => setPhone(e.target.value)} />
								<p className="admin__code">{tracker.code}</p>
								<select className='admin__code' onInput={e => setIsClosed(e.target.value)}>
									<option disabled selected>Поменять статус</option>
									<option value="open">Открыт</option>
									<option value="close">Закрыт</option>
								</select>
								<div className='create-step'>
									<button onClick={handleChange}>Save</button>
								</div>
							</div>
							<table className="table ">
								<thead className="table__header_block">
									<tr className="table__header_flex">
										<th>ID</th>
										<th>Text</th>
										<th>Options</th>
									</tr>
								</thead>
								<tbody className="table__block_body">
									{list.map(el => (
										<tr className="table__header_flex" key={el.code}>
											<td className="new-table__block_id">{el.id}</td>
											<td className="new-table__block_name modify">{el.name}</td>
											<td className="new-table__block_option "><NavLink to={`/edit-step/${el.id}`}><img src={pen} alt="" className="table__icon" /></NavLink><img onClick={() => { deleteStep(el.id) }} src={trash} alt="" className="table__icon" /></td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="admin__seo_main d-flex flex-column">
							<label className="admin__create_label">Слайдер</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								const { files } = e.target
								setFiles(files)
							}} multiple />
							<div className='admin__grid-slider'>
								{
									tracker?.files?.map((el, idx) => (
										<div className='admin__slider-i'>
											<span className='admin__slider-x' onClick={() => handleDeleteImage(el.id)}>x</span>
											<img src={`${_LINK}/v1/api/file/${el?.name}`} alt="" />
										</div>
									))
								}
							</div>
							<button className="admin__seo_btn" style={{ height: "45px", marginTop: "20px" }} onClick={handleSend}>Сохранить</button>
						</div>

						<div className='create-step'>
							<input onInput={(e) => setNewStep(e.target.value)} type="text" />
							<button onClick={handleAdd}>Add</button>
						</div>
					</div>

				</section>

			</div>
		)
	} else {
		return <Login />
	}
}