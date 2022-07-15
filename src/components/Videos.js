import React, { useEffect, useState } from 'react';
import { AdminPanel } from './AdminPanel';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { logoutAction } from '../redux/actions/login';
import { _LINK } from '../data/Data';
import axios from 'axios';

const Videos = ({ setDisplay }) => {
	const { isAuth } = useSelector(store => store.login)
	const dispatch = useDispatch()
	const [news, setNews] = useState([])

	const [first, setFirst] = useState({num: 1, category: 2})
	const [second, setSecond] = useState({num: 2, category: 2})
	const [third, setThird] = useState({num: 3, category: 2})
	const [fourth, setFourth] = useState({num: 4, category: 2})

	useEffect(() => {
		setDisplay(true)
		const get = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/user/news/category/2`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setFirst({...first, ...Array.from(data).find(el => el.num === 1)})
				setSecond({ ...second, ...Array.from(data).find(el => el.num === 2) })
				setThird({ ...third, ...Array.from(data).find(el => el.num === 3) })
				setFourth({ ...fourth, ...Array.from(data).find(el => el.num === 4) })
			} catch (e) {
				alert(e)
			}
		}
		get()
	}, [])

	const handleSave = async () => {

		
		save(first)
		save(second)
		save(third)
		save(fourth)

		alert("Запись изменена")
		window.location.reload()
	}

	const save = async (obj) => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/request/video`,
			headers: {
				'Authorization': localStorage.getItem("token"),
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(obj)
		}
		try {
			const { data } = await axios(config)
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
						<h3 className="admin__categories_title">
							Videos
						</h3>
						<div className="table__block">
							<table className="table ">
								<thead className="table__header_block">
									<tr className="table__header_flex">
										<th className="table__id">ID</th>
										<th className="table__name">Название</th>
										<th className="table__num">Ссылка</th>
										<th className="table__option">Option</th>
									</tr>
								</thead>
								<tbody className="table__block_body">
									<tr className="table__header_flex">
										<td className="table__block_id">1 видео</td>
										<td className="table__block_name"><input type="text" value={first.text} onInput={(e) => { setFirst({ ...first, text: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_num"> <input type="text" value={first.link} onInput={(e) => { setFirst({ ...first, link: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
									</tr>
									<tr className="table__header_flex">
										<td className="table__block_id">2 видео</td>
										<td className="table__block_name"><input type="text" value={second.text} onInput={(e) => { setSecond({ ...second, text: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_num"> <input type="text" value={second.link} onInput={(e) => { setSecond({ ...second, link: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
									</tr>
									<tr className="table__header_flex">
										<td className="table__block_id">3 видео</td>
										<td className="table__block_name"><input type="text" value={third.text} onInput={(e) => { setThird({ ...third, text: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_num"> <input type="text" value={third.link} onInput={(e) => { setThird({ ...third, link: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
									</tr>
									<tr className="table__header_flex">
										<td className="table__block_id">большое видео</td>
										<td className="table__block_name"><input type="text" value={fourth.text} onInput={(e) => { setFourth({ ...fourth, text: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_num"> <input type="text" value={fourth.link} onInput={(e) => { setFourth({ ...fourth, link: e.target.value }) }} className='table-inp' /></td>
										<td className="table__block_option "><button className='table-save' onClick={handleSave}>Save</button></td>
									</tr>
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

export default Videos