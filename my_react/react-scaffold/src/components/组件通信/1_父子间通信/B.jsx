import React from "react";
import C from './C'

export default function B(props) {
	return (
		<div>
			<div>B</div>
			<hr/>
			<C str={props.str}></C>
		</div>
	)
}