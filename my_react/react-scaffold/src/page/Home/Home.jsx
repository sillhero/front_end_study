import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
	return (
		<div className="panel">
			<div className="panel-body">
				<h3>我是 Home 的内容</h3>
				<hr />
				<div>
					<ul className="nav nav-tabs" style={{ borderBottom: "none" }}>
						<li>
							<NavLink className='list-group-item' to="/home/news">News</NavLink>
						</li>
						<li>
							<NavLink className='list-group-item' to="/home/message">Message</NavLink>
						</li>
					</ul>
					<hr />
					{/* 拆分的内容 */}
					<Outlet />
				</div>
			</div>
		</div>
	);
}
