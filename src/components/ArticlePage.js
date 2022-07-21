import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { _LINK } from '../data/Data';
import { Footer } from './Footer';

export const ArticlePage = ({ setIsLight }) => {

	const [article, setArticle] = useState({})

	useEffect(() => {
		setIsLight(false)
		console.log(id)
		const get = async () => {
			const config = {
				method: 'get',
				url: `${_LINK}/v1/api/user/news/id/${id}`
			}
			const { data } = await axios(config)
			console.log(article)
			setArticle(data)
		}
		get()
	}, [])
	const { id } = useParams()

	return (
		<section className='article' >
			<div className='container'>
				<h2 className='article__title'>{article?.text}</h2>
				<div className='article__img'>
					<img src={`${_LINK}/v1/api/file/${article?.file?.name}`} alt="" />
				</div>
				<p className='article__desc'>{article?.link}</p>
			</div>
			<Footer />
		</section>
	)
}