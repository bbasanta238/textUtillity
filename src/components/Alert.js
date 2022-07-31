import React from "react";

export default function alert(props) {
	const capitalize = (word) => {
		let initialLetter = word.charAt(0);
		return initialLetter.toUpperCase() + word.slice(1);
	};
	return (
		props.alert && (
			<div
				className={`alert alert-${props.alert.type} alert-dismissible fade show`}
				role="alert"
			>
				<strong>{capitalize(props.alert.type)}</strong>
				{props.alert.msg}
			</div>
		)
	);
}
