import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuBlock = ({links, name}) => {

	const [show, setShow] = useState(false)

	return (
		<div className="admin__block">
			<h5 className="admin__subtitle" onClick={() => setShow(!show)}>{name}</h5>
			{
				show && links.map((el) => <Link to={el.link} className='admin__desc animate__animated animate__fadeInLeft'>{el.text}</Link>)
			}
		</div>
	)
}