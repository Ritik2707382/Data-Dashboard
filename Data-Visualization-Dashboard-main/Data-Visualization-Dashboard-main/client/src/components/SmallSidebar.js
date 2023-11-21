import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

import NavLinks from "./NavLinks";

const SmallSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const toggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
		console.log(isSidebarOpen);
	};
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<button className="close-btn" onClick={toggle}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggle} />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
