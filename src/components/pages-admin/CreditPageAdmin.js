import React, { useEffect, useState } from 'react';
import { logoutAction } from '../../redux/actions/login';
import { useDispatch, useSelector } from 'react-redux';
import { AdminPanel } from '../AdminPanel';
import Login from '../Login';
import axios from 'axios';
import { _LINK } from '../../data/Data';

const CreditPageAdmin = ({ setDisplay }) => {

	const [page, setPage] = useState({})
	const [inputs, setInputs] = useState({})
	const [firstFile, setFirstFile] = useState(null)
	const [secondFile, setSecondFile] = useState(null)
	const [thirdFile, setThirdFile] = useState(null)
	const [fourthFile, setFourthFile] = useState(null)

	useEffect(() => {
		setDisplay(true)
		const getPage = async () => {
			const { data } = await axios(`${_LINK}/v1/api/page/credit`)
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
				url: `${_LINK}/v1/api/page/credit`,
				headers: {
					'Authorization': localStorage.getItem("token"),
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(page)
			}
			const { data } = await axios(config)
			console.log(data)
			if (firstFile) {
				await addFile(firstFile, "/credit/car")
			}
			if (secondFile) {
				await addFile(secondFile, "/credit/first")
			}
			if (thirdFile) {
				await addFile(thirdFile, "/credit/second")
			}
			if (fourthFile) {
				await addFile(fourthFile, "/credit/third")
			}
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
						<p className="admin__categories_head">Кредитование</p>
						<div className="admin__seo_main d-flex flex-column">

							<label className="admin__create_label">Машина</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setFirstFile(e.target.files[0])
							}} />
							{
								page?.carFile && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.carFile?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Раздел №1 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstTitle} id="firstTitle" onInput={handleInput}/>

							<label className="admin__create_label">Раздел №1 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstDesc} id="firstDesc" onInput={handleInput} />

							<label className="admin__create_label">Раздел №1 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setSecondFile(e.target.files[0])
							}} />
							{
								page?.firstFile && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.firstFile?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Раздел №2 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondTitle} id="secondTitle" onInput={handleInput} />

							<label className="admin__create_label">Раздел №2 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondDesc} id="secondDesc" onInput={handleInput} />

							<label className="admin__create_label">Раздел №2 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setThirdFile(e.target.files[0])
							}} />
							{
								page?.secondFile && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.secondFile?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Раздел №3 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.thirdTitle} id="thirdTitle" onInput={handleInput} />
							
							<label className="admin__create_label">Раздел №3 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.thirdDesc} id="thirdDesc" onInput={handleInput} />

							<label className="admin__create_label">Раздел №3 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setFourthFile(e.target.files[0])
							}} />
							{
								page?.thirdFile && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.thirdFile?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Форма Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.formTitle} id="formTitle" onInput={handleInput}/>

							<label className="admin__create_label">Форма Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.formDesc} id="formDesc" onInput={handleInput} />

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

export default CreditPageAdmin;