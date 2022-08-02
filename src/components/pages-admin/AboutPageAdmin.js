import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _LINK } from '../../data/Data';
import { logoutAction } from '../../redux/actions/login';
import { AdminPanel } from '../AdminPanel';
import Login from '../Login';

const AboutPageAdmin = ({setDisplay}) => {

	const [page, setPage] = useState({})
	const [inputs, setInputs] = useState({})
	const [firstFile, setFirstFile] = useState(null)
	const [secondFile, setSecondFile] = useState(null)
	const [thirdFile, setThirdFile] = useState(null)

	useEffect(() => {
		setDisplay(true)
		const getPage = async () => {
			const { data } = await axios(`${_LINK}/v1/api/page/aboutpage`)
			setPage(data)
			console.log(data)
		}
		getPage()
	}, [])

	const { isAuth } = useSelector(store => store.login)
	const dispatch = useDispatch()

	const handleInput = (e) => {
		const { id, value } = e.target
		setInputs({...inputs, [id] : value})
	}

	const handleSend = async () => {
		const arr = Object.keys(inputs)
		const obj = {}
		for (let i = 0; i < arr.length; i++) {
			if (inputs[arr[i]]) {
				await setPage({...page, [arr[i]] : inputs[arr[i]]})
				obj[arr[i]] = inputs[arr[i]]
			}
		}
		const result = Object.assign(page, obj)
		await setPage(result)
		console.log(page)

		try {
			const config = {
				method: 'post',
				url: `${_LINK}/v1/api/page/aboutpage`,
				headers: {
					'Authorization': localStorage.getItem("token"),
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(page)
			}
			const { data } = await axios(config)
			console.log(data)
			if (firstFile) {
				await addFile(firstFile, "/aboutpage/first")
			}
			if (secondFile) {
				await addFile(secondFile, "/aboutpage/second")
			}
			if (thirdFile) {
				await addFile(thirdFile, "/aboutpage/third")
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
						<p className="admin__categories_head">О нас</p>
						<div className="admin__seo_main d-flex flex-column">

							<label className="admin__create_label">Заглавие</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.title} id="title" onInput={handleInput}/>

							<label className="admin__create_label">Секция №1 текст 1</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstOne} id="firstOne" onInput={handleInput} />
							
							<label className="admin__create_label">Секция №1 текст 2</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstTwo} id="firstTwo" onInput={handleInput} />

							<label className="admin__create_label">Секция №1 текст 3</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstThree} id="firstThree" onInput={handleInput} />

							<label className="admin__create_label">Секция №2 текст 1</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondOne} id="secondOne" onInput={handleInput} />

							<label className="admin__create_label">Секция №2 текст 2</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondTwo} id="secondTwo" onInput={handleInput} />
							
							<label className="admin__create_label">Секция №2 текст 3</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondThree} id="secondThree" onInput={handleInput} />

							<label className="admin__create_label">Секция №3 Заглавие</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.thirdTitle} id="thirdTitle" onInput={handleInput} />

							<label className="admin__create_label">Секция №3 текст 1</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.thirdOne} id="thirdOne" onInput={handleInput} />

							<label className="admin__create_label">Секция №3 текст 2</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.thirdTwo} id="thirdTwo" onInput={handleInput} />

							<label className="admin__create_label">Секция №3 текст 3</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.thirdThree} id="thirdThree" onInput={handleInput} />

							<label className="admin__create_label">Форма Заглавие</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.formTitle} id="formTitle" onInput={handleInput} />

							<label className="admin__create_label">Форма Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.formDesc} id="formDesc" onInput={handleInput} />

							<label className="admin__create_label">Секция №1 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setFirstFile(e.target.files[0])
							}} />
							{
								page?.first && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.first?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Секция №2 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setSecondFile(e.target.files[0])
							}} />
							{
								page?.second && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.second?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Секция №3 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setThirdFile(e.target.files[0])
							}} />
							{
								page?.third && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.third?.name}`} alt="" />
									</div>
								)
							}

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

export default AboutPageAdmin;