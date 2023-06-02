import React, {useEffect, useRef, useState} from 'react'
import './HeroList.css'
import axios from "axios";
export default function HeroList() {
	let [heros, setHeros] = React.useState([]);
	let [v, setV] = useState('');
	let input = useRef();

	useEffect(() => {
		async function getHeros() {
			let result = await axios.get('http://api.xiaohigh.com/heros', {
				params: {
					name_like: v
				}
			});
			setHeros(result.data);
		}
		getHeros();
	}, [v])

	let search = async () => {
		let value = input.current.value;
		setV(value);
	}

	return (
		<div className='hero-container'>
			<h2>英雄列表</h2>
			<hr/>
			<div className='search'>
				<input type="text" ref={input}/><button onClick={search}>搜索</button>
			</div>
			<hr/>
			<div className='hero-list'>
				{
					heros.map(item => {
						return (
							<div key={item.id} className='hero-item'>
								<img width='100%' src={'http://cdn.xiaohigh.com' + item.image} alt=""/>
								<p>{item.name}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}