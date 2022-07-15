import React, { useEffect, useState } from 'react';
import { AdminPanel } from './AdminPanel';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { logoutAction } from '../redux/actions/login';
import { NavLink } from 'react-router-dom';
import { _LINK } from '../data/Data';
import axios from 'axios';
import pen from '../images/pen-to-square-solid.svg'
import trash from '../images/trash-can-solid.svg'

const News = ({setDisplay}) => {
	const { isAuth } = useSelector(store => store.login)
	const dispatch = useDispatch()
	const [news, setNews] = useState([])

	useEffect(() => {
		setDisplay(true)
		const get = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/user/news/category/1`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setNews(data)
			} catch (e) {
				alert(e)
			}
		}
		get()
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
					<div className="admin__categories_block ">
						<h3 className="admin__categories_title">
							News
						</h3>
						<div className="admin__categories_header d-flex align-center justify-between">
							<p className="admin__categories_head">Add news</p>
							<NavLink to="/create-news"><button className="admin__categories_add">Add</button></NavLink>
						</div>
						<div className="table__block table__categories">
							<table className="table ">
								<thead className="table__header_block">
									<tr className="table__header_flex">
										<th >ID</th>
										<th>Text</th>
										<th></th>
									</tr>
								</thead>
								<tbody className="table__block_body">
									{news.map(el => (
										<tr className="table__header_flex" key={el.id}>
											<td className="table__block_id">{el.id}</td>
											<td className="table__block_name modify">{el.text}</td>
											<td className="table__block_option "><NavLink to={`/edit-news/${el.id}`}><img src={pen} alt="" className="table__icon" /></NavLink><img onClick={() => { }} src={trash} alt="" className="table__icon" /></td>
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

export default News