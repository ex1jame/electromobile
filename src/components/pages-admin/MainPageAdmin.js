import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _LINK } from '../../data/Data';
import { logoutAction } from '../../redux/actions/login';
import { AdminPanel } from '../AdminPanel';
import Login from '../Login';

const MainPageAdmin = ({ setDisplay }) => {

	const [page, setPage] = useState({})
	const [inputs, setInputs] = useState({})
	const [video, setVideo] = useState(null)
	const [videoBack, setVideoBack] = useState(null)
	const [firstFile, setFirstFile] = useState(null)
	const [secondFile, setSecondFile] = useState(null)
	const [stepFile, setStepFile] = useState(null)

	useEffect(() => {
		setDisplay(true)
		const getPage = async () => {
			const { data } = await axios(`${_LINK}/v1/api/page/mainpage`)
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
				url: `${_LINK}/v1/api/page/mainpage`,
				headers: {
					'Authorization': localStorage.getItem("token"),
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(page)
			}
			const { data } = await axios(config)
			console.log(data)
			if (video) {
				await addFile(video, "/mainpage/video")
			}
			if (videoBack) {
				await addFile(videoBack, "/mainpage/videoback")
			}
			if (firstFile) {
				await addFile(firstFile, "/mainpage/firstFile")
			}
			if (secondFile) {
				await addFile(secondFile, "/mainpage/secondFile")
			}
			if (stepFile) {
				await addFile(stepFile, "/mainpage/thirdFile")
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
						<p className="admin__categories_head">Главная страница</p>
						<div className="admin__seo_main d-flex flex-column">

							<label className="admin__create_label">Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.title} id="title" onInput={handleInput}/>

							<label className="admin__create_label">Подзаголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.subtitle} id="subtitle" onInput={handleInput}/>

							<label className="admin__create_label">Слайд №1 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstTitle} id="firstTitle" onInput={handleInput} />

							<label className="admin__create_label">Слайд №1 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.firstDesc} id="firstDesc" onInput={handleInput} />

							<label className="admin__create_label">Слайд №1 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setFirstFile(e.target.files[0])
							}} />
							{
								page?.firstFile && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.firstFile?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Слайд №2 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondTitle} id="secondTitle" onInput={handleInput} />

							<label className="admin__create_label">Слайд №2 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.secondDesc} id="secondDesc" onInput={handleInput} />

							<label className="admin__create_label">Слайд №2 Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setSecondFile(e.target.files[0])
							}} />
							{
								page?.secondFile && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.secondFile?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Преимущества Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepTitle} id="stepTitle" onInput={handleInput} />

							<label className="admin__create_label">Преимущества Картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setStepFile(e.target.files[0])
							}} />
							{
								page?.thirdSectionFile && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.thirdSectionFile?.name}`} alt="" />
									</div>
								)
							}

							<label className="admin__create_label">Преимущество №1 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepFirstTitle} id="stepFirstTitle" onInput={handleInput} />

							<label className="admin__create_label">Преимущество №1 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepFirstDesc} id="stepFirstDesc" onInput={handleInput} />

							<label className="admin__create_label">Преимущество №2 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepSecondTitle} id="stepSecondTitle" onInput={handleInput} />

							<label className="admin__create_label">Преимущество №2 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepSecondDesc} id="stepSecondDesc" onInput={handleInput} />

							<label className="admin__create_label">Преимущество №3 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepThirdTitle} id="stepThirdTitle" onInput={handleInput} />

							<label className="admin__create_label">Преимущество №3 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepThirdDesc} id="stepThirdDesc" onInput={handleInput} />

							<label className="admin__create_label">Преимущество №4 Заголовок</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepFourthTitle} id="stepFourthTitle" onInput={handleInput} />

							<label className="admin__create_label">Преимущество №4 Описание</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.stepFourthDesc} id="stepFourthDesc" onInput={handleInput} />

							<label className="admin__create_label">Видео</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.videos} id="videos" onInput={handleInput} />

							<label className="admin__create_label">Новости</label>
							<input type="text" className="admin__seo_electro car_brand" placeholder={page?.news} id="news" onInput={handleInput} />

							<label className="admin__create_label">Видео</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setVideo(e.target.files[0])
							}}/>
							{
								page?.video && (
								<video playsInline autoPlay muted loop className='admin__video-hero'>
									{page?.video && <source src={`${_LINK}/v1/api/file/${page?.video.name}`} type="video/mp4" />}
								</video>)
							}
							<label className="admin__create_label">Видео начальная картинка</label>
							<input type="file" className="admin__seo_electro car_brand" onInput={(e) => {
								setVideoBack(e.target.files[0])
							}} />
							{
								page?.videoBack && (
									<div className='admin__img-look'>
										<img src={`${_LINK}/v1/api/file/${page?.videoBack?.name}`} alt="" />
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

export default MainPageAdmin;