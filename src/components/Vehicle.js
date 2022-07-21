import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { _LINK } from '../data/Data';
import { AdminPanel } from './AdminPanel';
import Login from './Login';
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import { logoutAction } from '../redux/actions/login';

const Vehicle = ({ setDisplay }) => {

	const [cars, setCars] = useState([])

	useEffect(() => {
		setDisplay(true)
		const get = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/car/all`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setCars(data)
			} catch (e) {
				alert(e)
			}
		}
		get()
	}, [])

	const handleDelete = async (id) => {
		try {
			const config = {
				method: 'post',
				url: `${_LINK}/v1/api/car/delete/${id}`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			await axios(config)
			alert("Запись удалена")
			window.location.reload()
		} catch (e) {
			alert(e)
		}
	}

	const { isAuth } = useSelector(store => store.login)
	const dispatch = useDispatch()

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
						<h3 className="admin__categories_title">
							Cars
						</h3>
						<div className="admin__categories_header d-flex align-center justify-between">
							<p className="admin__categories_head">Categories</p>
							<NavLink to="/create"><button href="/admin" className="admin__categories_add">Add</button></NavLink>
						</div>
						<div className="table__block table__categories">
							<table className="table ">
								<thead className="table__header_block">
									<tr className="table__header_flex">
										<th>ID</th>
										<th>Brand</th>
										<th>Year</th>
										<th>Option</th>
									</tr>
								</thead>
								<tbody className="table__block_body">
									{cars.map(el => (
										<tr className="table__header_flex" key={el.id}>
											<td className="table__block_id">{el.id}</td>
											<td className="table__block_name modify">{el.brand}</td>
											<td className='table__block_name modify'>{el.yearCreated}</td>
											<td className="table__block_option "><NavLink to={`/edit-car/${el.id}`}><img src={pen} alt="" className="table__icon" /></NavLink><img onClick={() => { handleDelete(el.id) }} src={trash} alt="" className="table__icon" /></td>
										</tr>
									))}
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

export default Vehicle