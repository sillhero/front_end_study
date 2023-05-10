import React from 'react'
import moment from "moment";
export default function NewsItem(props) {
	let {data} = props;
	console.log(typeof data);
	let len = data.images.length;
	console.log('图片的数量：' + len);
	return (
		<div>
			{/* 调用的是在循环里调用的，所以这里只是每一个实体的处理 */}
			{/* 首先的重点就是根据不同的图片数量来进行一个不同格式的处理，这里需要作为一个判断来整合之前静态页面的几种情况 */}
			{/* 四张图的情况 */}
			{len === 4 && (<div className="news-item">
				<h3>{data.title}</h3>
				{/* 图片信息 */}
				<div className="images-list">
					{
						data.images.map((item, index) => {
							return (
								<div className="img-item" key={index}>
									<img src={item} alt="" />
								</div>
							)
						})
					}
				</div>

				{/* 作者信息 */}
				<div className="info">
					<span>{data.author}</span>
					&nbsp;&nbsp;
					<span>{moment(data.date).format('YYYY-MM-DD HH:mm:ss')}</span>
				</div>
			</div>)}


			{/* 一张图的情况 */}
			{len === 1 && (<div className="news-item">
				<div className="left">
					<h3>{data.title}</h3>
					<div className="info">
						<span>{data.author}</span>
						&nbsp;&nbsp;
						<span>{moment(data.date).format('YYYY-MM-DD HH:mm:ss')}</span>
					</div>
				</div>
				<div className="right">
					<img
						width="100%"
						src={data.images[0]}
						alt=""
					/>
				</div>
			</div>) }


			{/* 无图的情况 */}
			{len === 0 && (<div className="news-item">
				<h3>{data.title}</h3>
				<div className="info">
					<span>{data.author}</span>
					&nbsp;&nbsp;
					<span>{moment(data.date).format('YYYY-MM-DD HH:mm:ss')}</span>
				</div>
			</div>)
			}

		</div>
	)
}