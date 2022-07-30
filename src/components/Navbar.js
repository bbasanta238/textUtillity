import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode.appearance} bg-${props.mode.appearance}`}
		>
			<a className="navbar-brand" href="/">
				{props.title}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							{props.about}
						</a>
					</li>
				</ul>
				<div className="custom-control custom-switch">
					<input
						type="checkbox"
						className="custom-control-input"
						id="customSwitch1"
						style={{backgroundColor:props.mode.appearance === "dark"?"purple":"white"}}
					/>
					<label
						className="custom-control-label"
						htmlFor="customSwitch1"
						onClick={props.toggleMode}
						style = {{color: props.mode.appearance === "dark"?"white":"black"}}
					>
						{props.mode.info}
					</label>
				</div>
			</div>
		</nav>
	);
}

//only accept string in title and about
Navbar.propTypes = {
	title: PropTypes.string,
	about: PropTypes.string,
};

// sets default props if no props are sent
Navbar.defaultProps = {
	title: "Set title here",
	about: "set about",
};
