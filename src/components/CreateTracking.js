import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _LINK } from '../data/Data';
import { logoutAction } from '../redux/actions/login';
import { AdminPanel } from './AdminPanel';
import Login from './Login';

export const CreateTracking = ({ setDisplay }) => {

	useEffect(() => {
		setDisplay(true)
	}, [])

	const [track, setTrack] = useState({})

	const handleInput = (e) => {
		const { value, id } = e.target
		setTrack({ ...track, [id]: value })
	}

	const handleSend = async () => {
		if (track.fullName && track.text && track.phone) {
			const config = {
				method: 'post',
				url: `${_LINK}/v1/api/tracker/create`,
				headers: {
					'Authorization': localStorage.getItem("token"),
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(track)
			}
			try {
				const { data } = await axios(config)
				alert("Запись создана")
				window.location.reload()
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
					<div className="admin__categories_block ">
						<div className="table__block table__categories">
							<div>
								<p className="admin__categories_head">Adding new tracking user</p>
								<div className="admin__seo_main d-flex">
									<div className="admin__seo_col d-flex flex-column">
										<label className="admin__create_label">Имя</label>
										<input type="text" className="admin__seo_electro car_brand" placeholder="Имя" id="fullName" onInput={handleInput} />
										<label className="admin__create_label">Первый шаг</label>
										<input type="text" className="admin__seo_electro car_mini_desc" placeholder="Описание..." id="text" onInput={handleInput} />
										<label className="admin__create_label">Телефон</label>
										<input type="text" className="admin__seo_electro car_long_desc" placeholder="+996..." id="phone" onInput={handleInput} />
										<button className="admin__seo_btn" onClick={handleSend}>Сохранить</button>
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
		return <Login />
	}
}


{/* <div className="admin">
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
							<th>ID</th>
							<th>Brand</th>
							<th>Year</th>
							<th>Option</th>
						</tr>
					</thead>
					<tbody className="table__block_body">
						{/* {cars.map(el => (
									<tr className="table__header_flex" key={el.id}>
										<td className="table__block_id">{el.id}</td>
										<td className="table__block_name modify">{el.brand}</td>
										<td className='table__block_name modify'>{el.yearCreated}</td>
										<td className="table__block_option "><NavLink to={`/edit-car/${el.id}`}><img src={pen} alt="" className="table__icon" /></NavLink><img onClick={() => { }} src={trash} alt="" className="table__icon" /></td>
									</tr>
								))} 
					</tbody>
				</table>
			</div>
		</div>
	</section>

</div> */}