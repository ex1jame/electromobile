import axios from 'axios';
import React, { useState } from 'react';
import { _LINK } from '../data/Data';

export const FormBlockMain = ({ setOnForm }) => {

	const [request, setRequest] = useState({ isCalled: false, category: 2 })

	const handleCreateRequest = async () => {
		const config = {
			method: 'post',
			url: `${_LINK}/v1/api/user/request/create`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(request)
		}
		const { data } = await axios(config)
		window.location.reload()
	}


	const handleAddData = ({ target: { id, value } }) => {
		switch (id) {
			case "fullName": {
				setRequest({ ...request, fullName: value })
				break;
			}
			case "phone": {
				setRequest({ ...request, phone: value })
				break;
			}
			case "dateTime": {
				setRequest({ ...request, dateTime: `${value}T00:00:00` })
				break;
			}
			case "time": {
				setRequest({ ...request, time: value })
				break;
			}
			case "carModel": {
				setRequest({...request, carModel: value})
				break;
			}
		}

	}

	return (
		<div className="credit__form_block" style={{ height: "300px"}}>
			<form className='credit__form_form'>
				<div className="credit__form_info">
					<input type="text" className='credit__form_input' placeholder="ФИО" onInput={handleAddData} id="fullName" />
					<span className="credit__form_span"></span>
				</div>
				<div className="credit__form_info">
					<input type="tel" pattern='2[0-9]{3}-[0-9]{3}' className='credit__form_input' placeholder="Телефон" onInput={handleAddData} id="phone" />
					<span className="credit__form_span"></span>
				</div>
				<div className="credit__form_info" style={{ marginBottom: "30px"}}>
					<input type="text" className='credit__form_input' placeholder="Модель машины" onInput={handleAddData} id="carModel" />
					<span className="credit__form_span"></span>
				</div>
			</form>
			<button className="orange_btn" onClick={handleCreateRequest}>ЗАПИСАТЬСЯ</button>
			<div className='credit__close' onClick={() => setOnForm(false)}>X</div>
		</div>
	)
}