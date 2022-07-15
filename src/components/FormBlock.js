import axios from 'axios';
import React, { useState } from 'react';
import { _LINK } from '../data/Data';

export const FormBlock = ({ setOnForm }) => {

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
		}

	}

	return (
		<div className="credit__form_block">
			<form className='credit__form_form'>
				<div className="credit__form_info">
					<input type="text" className='credit__form_input' placeholder="ФИО" onInput={handleAddData} id="fullName" />
					<span className="credit__form_span"></span>
				</div>
				<div className="credit__form_info">
					<input type="tel" pattern='2[0-9]{3}-[0-9]{3}' className='credit__form_input' placeholder="Телефон" onInput={handleAddData} id="phone" />
					<span className="credit__form_span"></span>
				</div>
				<div className="credit__form_info">
					<input type="date" className='credit__form_input' placeholder="" onInput={handleAddData} id="dateTime" />
					<span className="credit__form_span"></span>
				</div>
				<div className="credit__form_info">
					<input type="text" className='credit__form_input' placeholder="Время" onInput={handleAddData} id="time" />
					<span className="credit__form_span"></span>
				</div>
				<p className="credit__form_desc">
					Клиент считается зарегистрированным после подтверждения даты и времени нашим менеджером
				</p>
			</form>
			<button className="orange_btn" onClick={handleCreateRequest}>ЗАПИСАТЬСЯ</button>
			<div className='credit__close' onClick={() => setOnForm(false)}>X</div>
		</div>
	)
}