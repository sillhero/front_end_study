import React from "react";
import "./2-toutiao.css";
import data from "./data.json";
import NewsItem from "./NewsItem";
export default function Toutiao() {
	return (
		<div className="news-container">
			<h1>体育新闻</h1>
			<div className="news-list">
				{/* 组件提取 */}
				{
					data.map((item, index) => {
						return <NewsItem key={index} data={item} />
					})
				}
			</div>
		</div>
	);
}
