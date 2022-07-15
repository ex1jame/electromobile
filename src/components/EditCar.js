import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { _LINK } from '../data/Data';
import { logoutAction } from '../redux/actions/login';
import { AdminPanel } from './AdminPanel';
import Login from './Login';

const EditCar = ({ setDisplay }) => {

	const [backCar, setBackCar] = useState({})

	useEffect(() => {
		setDisplay(true)

		const getCar = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/car/id/${id}`,
				headers: {
					'Authorization': localStorage.getItem("token")
				},
			}
			const { data } = await axios(config)
			setBackCar(data)
			setCar(Object.assign(data, { carCategory: data.carCategory.id }))
		}
		getCar()

		const get = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/car/category`,
				headers: {
					'Authorization': localStorage.getItem("token")
				}
			}
			try {
				const { data } = await axios(config)
				setCategories(data)
			} catch (e) {
				alert(e)
			}
		}
		get()
	}, [])

	const [categories, setCategories] = useState([])
	const [car, setCar] = useState({})
	const [main, setMain] = useState({})
	const [secondary, setSecondary] = useState({})
	const [third, setThird] = useState({})
	const [mini, setMini] = useState({})
	const [gallery, setGallery] = useState([])

	const { id } = useParams()
	const { isAuth } = useSelector(store => store.login)

	const handleInputImage = (e) => {
		const { id, files } = e.target
		if (files?.length) {
			switch (id) {
				case "main": setMain(files[0])
					break;
				case "second": setSecondary(files[0])
					break;
				case "mini": setMini(files[0])
					break;
				case "third": setThird(files[0])
					break;
				case "addToGallery": setGallery(files)
					break;
			}
		}
	}

	const handleInput = (e) => {
		const { id, value } = e.target
		if (value && id) setCar({ ...car, [id]: value })
	}

	const handleSend = async () => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/car/update/${id}`,
			headers: {
				'Authorization': localStorage.getItem("token"),
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(car)
		}
		try {
			const { data } = await axios(config)
			if (main?.name) {
				await addImage(main, "main", id)
			}
			if (secondary?.name) {
				await addImage(secondary, "second", id)
			}
			if (third?.name) {
				await addImage(third, "third", id)
			}
			if (mini?.name) {
				await addImage(mini, "mini", id)
			}
			if (gallery?.length) {
				for (let i = 0; i < gallery.length; i++) {
					await addImageGallery(gallery[i], "addToGallery", id)
				}
			}
			alert("Запись обновлена")
			window.location.reload();
		} catch (e) {
			alert(e)
		}
	}

	const addImage = async (file, name, id) => {
		const formData = new FormData()
		formData.append(
			'file',
			file,
			file.name
		)
		await axios.post(`${_LINK}/v1/api/car/update/${name}/${id}`, formData, {
			headers: {
				'Authorization': localStorage.getItem("token"),
			}
		})
	}

	const addImageGallery = async (file, name, id) => {
		const formData = new FormData()
		formData.append(
			'file',
			file,
			file.name
		)
		await axios.post(`${_LINK}/v1/api/car/${name}/${id}`, formData, {
			headers: {
				'Authorization': localStorage.getItem("token"),
			}
		})
	}

	const deleteFromGallery = async (fileId) => {
		const config = {
			method: "post",
			url: `${_LINK}/v1/api/car/deleteFromGallery/${fileId}/${id}`,
			headers: {
				'Authorization': localStorage.getItem("token"),
			}
		}

		try {
			await axios(config)
			window.location.reload()
		} catch (e) {
			alert(e)
		}
	}

	const {dispatch} = useDispatch()

	if (isAuth) {
		return (
			<div className="admin">
				<AdminPanel />
				<section className="admin__hero">
					<div className="admin__hero_header " style={{ height: "109px" }}>
						<div className="admin__hero_admin">
							<span style={{ color: "#FFF", fontSize: "20px", cursor: "pointer" }}
								onClick={() => {
									dispatch(logoutAction())
								}}
							>Logout</span>
						</div>
					</div>
					<div className="admin__create_block">
						<h3 className="admin__categories_title">
							Adding new material
						</h3>
						<div className="admin__categories_header">
							<p className="admin__categories_head">Adding new material</p>
							<div className="admin__seo_main d-flex">
								<div className="admin__seo_col d-flex flex-column">
									<label className="admin__create_label">Марка</label>
									<input type="text" className="admin__seo_electro car_brand" placeholder={backCar?.brand} id="brand" onInput={handleInput} />
									<label className="admin__create_label">Мини-описание</label>
									<input type="text" className="admin__seo_electro car_mini_desc" placeholder={backCar?.miniDesc} id="miniDesc" onInput={handleInput} />
									<label className="admin__create_label">Длинное-описание</label>
									<input type="text" className="admin__seo_electro car_long_desc" placeholder={backCar?.longDesc} id="longDesc" onInput={handleInput} />
									<label className="admin__create_label">Год выпуска</label>
									<input type="text" className="admin__seo_electro car_wheel_drive" placeholder={backCar?.yearCreated} id="yearCreated" onInput={handleInput} />
									<label className="admin__create_label">Привод</label>
									<input type="text" className="admin__seo_electro car_wheel_drive" placeholder={backCar?.wheelDrive} id="wheelDrive" onInput={handleInput} />
									<label className="admin__create_label">запас хода (NEDC)</label>
									<input type="text" className="admin__seo_electro car_range" placeholder={backCar?.maxRange} id="maxRange" onInput={handleInput} />
									<label className="admin__create_label">мощность электродвигателя</label>
									<input type="text" className="admin__seo_electro car_motor_power" placeholder={backCar?.motorPower} id="motorPower" onInput={handleInput} />
									<label className="admin__create_label">емкость батареи</label>
									<input type="text" className="admin__seo_electro car_battery_power" placeholder={backCar?.batteryPower} id="batteryPower" onInput={handleInput} />
									<label className="admin__create_label">макс. скорость</label>
									<input type="text" className="admin__seo_electro car_max_speed" placeholder={backCar?.maxSpeed} id="maxSpeed" onInput={handleInput} />
									<label className="admin__create_label">Время до полного заряда</label>
									<input type="text" className="admin__seo_electro car_charge_time" placeholder="Время до полного заряда" />
									<label className="admin__create_label">крутящий момент двигателя</label>
									<input type="text" className="admin__seo_electro car_engine_torque" placeholder="крутящий момент двигателя" />
									<label className="admin__create_label">цвета</label>
									<input type="text" className="admin__seo_electro car_color" placeholder={backCar?.color} id="color" onInput={handleInput} />
									<label className="admin__create_label">базовая цена</label>
									<input type="text" className="admin__seo_electro car_base_price" placeholder={backCar?.basePrice} id="basePrice" onInput={handleInput} />
									<label className="admin__create_label">цена при полной комплектации</label>
									<input type="text" className="admin__seo_electro car_full_price" placeholder={backCar?.fullPrice} id="fullPrice" onInput={handleInput} />
									<label className="admin__create_label">макс. крутящий момент</label>
									<input type="text" className="admin__seo_electro car_max_torque" placeholder={backCar?.maxTorque} id="maxTorque" onInput={handleInput} />
									<label className="admin__create_label">размеры кузова</label>
									<input type="text" className="admin__seo_electro car_body_size" placeholder={backCar?.bodySize} id="bodySize" onInput={handleInput} />
									<label className="admin__create_label">размер колес</label>
									<input type="text" className="admin__seo_electro car_wheel_size" placeholder={backCar?.wheelSize} id="wheelSize" onInput={handleInput} />
									<label className="admin__create_label">колесная база</label>
									<input type="text" className="admin__seo_electro car_wheelbase" placeholder={backCar?.wheelbase} id="wheelbase" onInput={handleInput} />
									<label className="admin__create_label"> снаряженная масса</label>
									<input type="text" className="admin__seo_electro car_curb_weight" placeholder={backCar?.curbWeight} id="curbWeight" onInput={handleInput} />
									<label className="admin__create_label">клиренс</label>
									<input type="text" className="admin__seo_electro car_clearance" placeholder={backCar?.clearance} id="clearance" onInput={handleInput} />
									<label className="admin__create_label">приборная панель</label>
									<input type="text" className="admin__seo_electro car_dashboard" placeholder={backCar?.dashboard} id="dashboard" onInput={handleInput} />
									<span className="admin__seo_line"></span>
									<button className="admin__seo_btn" onClick={handleSend}>Сохранить</button>
								</div>
								<div className="admin__seo_images">
									<div>
										<label className="admin__seo_icon">Категория</label><br></br>
										<select className='admin__select' id="carCategory" onInput={handleInput}>
											<option>
												Выберите категорию
											</option>
											{
												categories.map(el => (
													<option value={el.id} key={el.id}>
														{el.name}
													</option>
												))
											}
										</select>
										<br></br>
										<br></br>
									</div>

									<label className="admin__seo_icon">Главное фото</label>
									<div className=""></div>
									{
										backCar?.mainPhoto?.name && (
											<div className='admin__img'>
												<img src={`${_LINK}/v1/api/file/${backCar?.mainPhoto?.name}`} alt='' />
											</div>
										)
									}
									<input id="main" type="file" className="admin__seo_file car_main_photo" onInput={handleInputImage} />

									<label className="admin__seo_icon">Второе фото</label>
									<div className="">

									</div>
									{
										backCar?.secondPhoto?.name && (
											<div className='admin__img'>
												<img src={`${_LINK}/v1/api/file/${backCar?.secondPhoto?.name}`} alt='' />
											</div>
										)
									}
									<input id="second" type="file" className="admin__seo_file car_second_photo" onInput={handleInputImage} />

									<label className="admin__seo_icon">Третье фото</label>
									<div className="">

									</div>
									{
										backCar?.thirdPhoto?.name && (
											<div className='admin__img'>
												<img src={`${_LINK}/v1/api/file/${backCar?.thirdPhoto?.name}`} alt='' />
											</div>
										)
									}
									<input id="third" type="file" className="admin__seo_file car_third_photo" onInput={handleInputImage} />

									<label className="admin__seo_icon">Мини фото</label>
									<div className="">

									</div>
									{
										backCar?.miniPhoto?.name && (
											<div className='admin__img'>
												<img src={`${_LINK}/v1/api/file/${backCar?.miniPhoto?.name}`} alt='' />
											</div>
										)
									}

									<input id="mini" type="file" className="admin__seo_file car_mini_photo" onInput={handleInputImage} />

									<label className="admin__seo_icon">Галерея</label>
									<div className="">

									</div>
									{
										backCar?.gallery?.map(el => (
											<div className='admin__img' key={el.id} style={{ position: "relative" }}>
												<img src={`${_LINK}/v1/api/file/${el?.name}`} alt='' />
												<span className='admin__del' onClick={() => {
													deleteFromGallery(el?.id)
												}}>X</span>
											</div>
										))
									}
									<input id="addToGallery" type="file" className="admin__seo_file card_gallery" onInput={handleInputImage} multiple />
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

export default EditCar