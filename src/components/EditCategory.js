import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { _LINK } from '../data/Data';
import { logoutAction } from '../redux/actions/login';
import { AdminPanel } from './AdminPanel';
import Login from './Login';

export const EditCategory = ({ setDisplay }) => {

	useEffect(() => {
		setDisplay(true)
	}, [])

	const { id } = useParams("id")
	const { name } = useParams("name")

	const [categoryName, setCategoryName] = useState("")

	const handleCreateCategory = async () => {
		if (categoryName) {
			const config = {
				method: 'post',
				url: `${_LINK}/v1/api/car/category/update`,
				headers: {
					'Authorization': localStorage.getItem("token"),
					'Content-Type': "application/json"
				},
				data: JSON.stringify({
					id, name: categoryName
				})

			}
			try {
				const { data } = await axios(config)
				alert("Категория обновлена")
				window.location.replace("/categories")
				setCategoryName("")
			} catch (e) {
				alert(e)
			}
		}
	}

	const { isAuth } = useSelector(store => store.login)

	const {dispatch } = useDispatch()

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
						<p className="admin__categories_head">Category update</p>
						<div className="admin__seo_main d-flex">
							<label className="admin__create_label"></label>
							<input type="text" value={categoryName} className="admin__seo_electro car_brand" placeholder={name} onInput={(e) => setCategoryName(e.target.value)}
								onKeyPress={(e) => {
									if (e.key === "Enter") handleCreateCategory()
								}}
							/>
							<button className="admin__seo_btn" style={{ marginLeft: "15px", height: "45px" }} onClick={handleCreateCategory}>Сохранить</button>
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