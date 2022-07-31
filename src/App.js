import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	// alert usestate
	const [alert, setAlert] = useState(null);
	// mode useState
	const [mode, setMode] = useState({
		appearance: "light",
		info: "Enable dark mode",
	});

	const toggleMode = () => {
		if (mode.appearance === "light") {
			setMode({
				appearance: "dark",
				info: "Disable dark mode",
			});
			showAlert("Dark mode has been enabled", "success ");
			document.body.style.backgroundColor = "#51557E";
		} else {
			setMode({
				appearance: "light",
				info: "Enable dark mode",
			});
			showAlert("Light mode has been enabled", "success ");
			document.body.style.backgroundColor = "white";
		}
	};

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1250);
	};
	return (
		<>
			<Navbar
				title="TextUtils"
				about="About TextUtils"
				mode={mode}
				toggleMode={toggleMode}
			/>
			<Alert alert={alert} />

			<Textform
				heading="Enter the text to analyze"
				mode={mode}
				showAlert={showAlert}
			/>
		</>
	);
}

export default App;
