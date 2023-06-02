import React from 'react'
import B from './B'
export default function A() {
	// A组件的数据
	let str = 'i love you';
	return (
		<div>
			<div>A</div>
			<hr/>
			<B str={str} />
		</div>
	);
}