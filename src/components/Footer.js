import React, { useEffect, useState } from 'react';
import instagram from '../images/Instagram.svg'
import whatsapp from '../images/Whatsapp.svg'
import youtube from '../images/Youtube.svg'
import telegram from '../images/Telegram.svg'
import { _LINK } from '../data/Data';
import axios from 'axios';

export const Footer = () => {

	const [icons, setIcons] = useState()

	useEffect(() => {
		const get2 = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/user/socials`
			}
			try {
				const { data } = await axios(config)
				setIcons(data)
			} catch (e) {
				console.log(e)
			}
		}
		get2()
	}, [])

	return (
		<footer className="footer">
			<div className="footer_main">
				<h3 className="section__title">КОНТАКТЫ</h3>
				<div className="footer__flex">
					<div className="footer__block">
						<p className="footer__title">Телефоны:</p>
						<p className="footer__title">Адрес:</p>
						<p className="footer__title">Соц. сети:</p>
					</div>
					<div className="footer__block">
						<p className="footer__subtitle"><a href={`tel:${icons?.phone}`}>{icons?.phoneText}</a></p>
						<p className="footer__subtitle"><a href={icons?.address} target="_blank">{icons?.addressText}</a></p>
						<div className="footer__grid">
							<a href={icons?.inst} target="_blank" className="footer__eclipse"><img src={instagram} alt="" /></a>
							<a href={icons?.youtube}
								className="footer__eclipse" target="_blank"><img src={youtube} alt="" /></a>
							<a href={icons?.whatsapp} target="_blank" className="footer__eclipse"><img src={whatsapp} alt="" /></a>
							<a href={icons?.telegram} target="_blank" className="footer__eclipse"><img src={telegram} alt="" /></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
