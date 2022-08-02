import React, { useEffect, useState } from 'react';
import { logoutAction } from '../../redux/actions/login';
import { useDispatch, useSelector } from 'react-redux';
import { AdminPanel } from '../AdminPanel';
import Login from '../Login';
import axios from 'axios';
import { _LINK } from '../../data/Data';

const TestDrivePageAdmin = ({ setDisplay }) => {

	const [page, setPage] = useState({})
	const [inputs, setInputs] = useState({})
	const [firstFile, setFirstFile] = useState(null)
	const [secondFile, setSecondFile] = useState(null)
	const [thirdFile, setThirdFile] = useState(null)
	const [fourthFile, setFourthFile] = useState(null)

	useEffect(() => {
		setDisplay(true)
		const getPage = async () => {
			const { data } = await axios(`${_LINK}/v1/api/page/testdrive`)
			setPage(data)
			console.log(data)
		}
		getPage()
	}, [])

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
				url: `${_LINK}/v1/api/page/testdrive`,
				headers: {
					'Authorization': localStorage.getItem("token"),
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(page)
			}
			const { data } = await axios(config)
			console.log(data)
			if (firstFile) {
				await addFile(firstFile, "/testdrive/first")
			}
			if (secondFile) {
				await addFile(secondFile, "/testdrive/second")
			}
			if (thirdFile) {
				await addFile(thirdFile, "/testdrive/third")
			}
			if (fourthFile) {
				await addFile(fourthFile, "/testdrive/fourth")
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
					<div className="admin__categories_header h-auto">
						<p className="admin__categories_head">Adding new category</p>
						<div className="admin__seo_main d-flex flex-column">
							<label className="admin__create_label">Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.title} id="title" onInput={handleInput}/>
							<label className="admin__create_label">Подзаголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.subtitle} id="subtitle" onInput={handleInput} />
							<label className="admin__create_label">Первый текст</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstText} id="firstText" onInput={handleInput} />
							<label className="admin__create_label">Второй текст</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondText} id="secondText" onInput={handleInput} />
							<label className="admin__create_label">Третий текст</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.thirdText} id="thirdText" onInput={handleInput} />
							<label className="admin__create_label">Форма Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.formTitle} id="formTitle" onInput={handleInput} />
							<label className="admin__create_label">Форма Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.formDesc} id="formDesc" onInput={handleInput} />
							<label className="admin__create_label">Картинка Секции</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setFirstFile(e.target.files[0])
							}} />
							{
								page?.carImage && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.carImage?.name}`} alt="" />
									</div>
								)
							}
							{/* <label className="admin__create_label">Первая иконка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setSecondFile(e.target.files[0])
							}} />
							{
								page?.logoFirst && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.logoFirst?.name}`} alt="" />
									</div>
								)
							}
							<label className="admin__create_label">Вторая иконка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setThirdFile(e.target.files[0])
							}} />
							{
								page?.logoSecond && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.logoSecond?.name}`} alt="" />
									</div>
								)
							}
							<label className="admin__create_label">Третья иконка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setFourthFile(e.target.files[0])
							}} />
							{
								page?.logoThird && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.logoThird?.name}`} alt="" />
									</div>
								)
							} */}
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

export default TestDrivePageAdmin;