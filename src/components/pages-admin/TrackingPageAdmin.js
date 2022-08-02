import React, { useEffect, useState } from 'react';
import { logoutAction } from '../../redux/actions/login';
import { useDispatch, useSelector } from 'react-redux';
import { AdminPanel } from '../AdminPanel';
import Login from '../Login';
import { _LINK } from '../../data/Data';
import axios from 'axios';

const TrackingPageAdmin = ({ setDisplay }) => {

	const [page, setPage] = useState({})
	const [inputs, setInputs] = useState({})

	useEffect(() => {
		setDisplay(true)
		const getPage = async () => {
			const { data } = await axios(`${_LINK}/v1/api/page/tracking`)
			setPage(data)
			console.log(data)
		}
		getPage()
	}, [])

	const { isAuth } = useSelector(store => store.login)
	const dispatch = useDispatch()

	const handleInput = (e) => {
		const { id, value } = e.target
		setInputs({ ...inputs, [id]: value })
	}

	const handleSend = async () => {
		const arr = Object.keys(inputs)
		const obj = {}
		for (let i = 0; i < arr.length; i++) {
			if (inputs[arr[i]]) {
				await setPage({ ...page, [arr[i]]: inputs[arr[i]] })
				obj[arr[i]] = inputs[arr[i]]
			}
		}
		const result = Object.assign(page, obj)
		await setPage(result)
		console.log(page)

		try {
			const config = {
				method: 'post',
				url: `${_LINK}/v1/api/page/tracking`,
				headers: {
					'Authorization': localStorage.getItem("token"),
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(page)
			}
			const { data } = await axios(config)
			console.log(data)
			alert("Страница обновлена")
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
		await axios.post(`${_LINK}/v1/api/page${path}`, formData, {
			headers: {
				'Authorization': localStorage.getItem("token"),
			}
		})
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
					<div className="admin__categories_header h-auto">
						<p className="admin__categories_head">Adding new category</p>
						<div className="admin__seo_main d-flex flex-column">
							<label className="admin__create_label">Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.title} id="title" onInput={handleInput}/>

							<label className="admin__create_label">Подзаголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.subtitle} id="subtitle" onInput={handleInput} />

							<label className="admin__create_label">Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.description} id="description" onInput={handleInput} />


							<button className="admin__seo_btn" style={{ marginLeft: "15px", height: "45px" }} onClick={handleSend}>Сохранить</button>
						</div>
					</div>
				</section>
			</div>
		);
	} else {
		return <Login />
	}
};

export default TrackingPageAdmin;