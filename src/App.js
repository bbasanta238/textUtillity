import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
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
			document.body.style.backgroundColor = "#51557E";
		} else {
			setMode({
				appearance: "light",
				info: "Enable dark mode",
			});
			document.body.style.backgroundColor = "white";
		}
	};

	return (
		<>
			<Navbar
				title="TextUtils"
				about="About TextUtils"
				mode={mode}
				toggleMode={toggleMode}
			/>
			<Textform heading="Enter the text to analyze" mode={mode}/>
			{/* <About /> */}
		</>
	);
}

export default App;
