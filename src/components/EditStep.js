import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { _LINK } from '../data/Data';
import { logoutAction } from '../redux/actions/login';
import { AdminPanel } from './AdminPanel';
import Login from './Login';

export const EditStep = ({ setDisplay }) => {

	useEffect(() => {
		setDisplay(true)
		const getStep = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/tracker/step/id/${id}`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setStepName(data.name)
			} catch (e) {
				alert(e)
			}
		}
		getStep()
	}, [])

	const { isAuth } = useSelector(store => store.login)

	const { id } = useParams()

	const [stepName, setStepName] = useState("")

	const handleCreateStep = async () => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/tracker/step/update`,
			headers: {
				'Authorization': localStorage.getItem("token"),
				'Content-Type': "application/json"
			},
			data: JSON.stringify({
				id, name: stepName
			})
		}
		try {
			const { data } = await axios(config)
			alert("Запись обновлена")
			window.location.reload()
		} catch (e) {
			alert(e)
		}
	}

	const {dispatch} = useDispatch()

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
					<div className="admin__categories_header">
						<p className="admin__categories_head">Adding new step</p>
						<div className="admin__seo_main d-flex">
							<label className="admin__create_label"></label>
							<input type="text" value={stepName} className="admin__seo_electro car_brand" placeholder="Шаг" onInput={(e) => setStepName(e.target.value)}
								onKeyPress={(e) => {
									if (e.key === "Enter") handleCreateStep()
								}}
							/>
							<button className="admin__seo_btn" style={{ marginLeft: "15px", height: "45px" }} onClick={handleCreateStep}>Сохранить</button>
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