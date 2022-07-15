import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { _LINK } from '../data/Data';
import { AdminPanel } from './AdminPanel';
import Login from './Login';
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'
import { NavLink } from 'react-router-dom';
import { logoutAction } from '../redux/actions/login';

export const TrackingList = ({ setDisplay }) => {

	const [list, setList] = useState([])

	useEffect(() => {
		setDisplay(true)
		const getTracking = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/tracker/all`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setList(data)
			} catch (e) {
				alert(e)
			}
		}
		getTracking()
	}, [])

	const handleDelete = async (id) => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/tracker/delete/${id}`,
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

	const { isAuth } = useSelector(store => store.login)
	const { dispatch } = useDispatch()

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
							<table className="table ">
								<thead className="table__header_block">
									<tr className="table__header_flex">
										<th>CODE</th>
										<th>Имя</th>
										<th>Номер</th>
										<th>Статус</th>
										<th>Действия</th>
									</tr>
								</thead>
								<tbody className="table__block_body">
									{list.map(el => (
										<tr className="table__header_flex" key={el.code}>
											<td className="table__block_id">{el.code}</td>
											<td className="table__block_name modify">{el.fullName}</td>
											<td className='table__block_name modify'>{el.phone}</td>
											<td className='table__block_name modify'>{el.isClosed ? <span style={{ backgroundColor: "red", color: "#FFF", padding: "2px 5px", borderRadius: "2px" }}>Закрыт</span> : <span style={{ backgroundColor: "green", color: "#FFF", padding: "2px 5px", borderRadius: "2px" }}>Открыт</span>}</td>
											<td className="table__block_option "><NavLink to={`/edit-tracking/${el.code}/${el.id}`}><img src={pen} alt="" className="table__icon" /></NavLink><img onClick={() => { handleDelete(el.id) }} src={trash} alt="" className="table__icon" /></td>
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