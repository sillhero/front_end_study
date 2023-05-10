import React, { useState } from "react";
import "./GoodsImage.css";

export default function GoodsImage() {
	let imageArr = [1, 2, 3, 4, 5];
	// 申明一个状态
	let [index, setIndex] = useState(0);
	// 申明一个函数
	let handle = (key) => {
		return () => {
			setIndex(key);
		};
	};
	return (
		<div className="goods-images">
			<div className="goods-image">
				<img src={`/goods/${index}.jpg`} alt="" />
			</div>
			<div className="small-images">
				{imageArr.map((item, key) => {
					return (
						<div key={key} className="item" onMouseOver={handle(key)}>
							<img
								key={key}
								src={`/goods/${item}.jpg`}
								alt=""
								className={key === index ? "active" : ""}
							/>
							<div />
						</div>
					);
				})}
			</div>
		</div>
	);
}
