import React, { useState } from "react";

export default function Textform(props) {
	// change of state using hooks
	const [text, setText] = useState("Enter text here");

	const handleUpClick = () => {
		// setText("clicked on upclick");
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};
	const handleResetClick = () => {
		setText("");
	};

	const handleReverse = () => {
		let reverseText = text.split("").reverse().join("");
		setText(reverseText);
	};

	// required to make write on input on change
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<div
				className="container my-2"
				style={{ color: props.mode.appearance === "dark" ? "white" : "black" }}
			>
				<div className="form-group">
					<label htmlFor="myBox">
						<h2>{props.heading}</h2>
					</label>
					<textarea
						className="form-control"
						onChange={handleOnChange}
						value={text}
						id="myBox"
						rows="8"
						style={{
							color: props.mode.appearance === "dark" ? "white" : "black",
							backgroundColor:
								props.mode.appearance === "dark" ? "grey" : "white",
						}}
					></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
					Convert to Lowercase
				</button>
				<button className="btn btn-primary" onClick={handleReverse}>
					Reverse text
				</button>
				<button
					className="btn btn-secondary mx-2 my-2"
					onClick={handleResetClick}
				>
					Reset text area
				</button>
			</div>
			<div
				className="container my-4"
				style={{ color: props.mode.appearance === "dark" ? "white" : "black" }}
			>
				<h2>Your text summary</h2>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").length} Minutes to read</p>
				<h2>Preview</h2>
				<p>{text.length>0 ? text : "Enter in textarea to preview"}</p>
			</div>
		</>
	);
}
