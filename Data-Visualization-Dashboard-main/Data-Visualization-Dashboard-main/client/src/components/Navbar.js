import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const toggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
		console.log(isSidebarOpen);
	};

	return (
		<Wrapper>
			<div className="nav-center">
				<button type="button" className="toggle-btn" onClick={toggle}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h3 className="logo-text">dashboard</h3>
				</div>
				<div className="btn-container">
					<button type="btn" className="btn">
						<FaUserCircle />
					</button>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
