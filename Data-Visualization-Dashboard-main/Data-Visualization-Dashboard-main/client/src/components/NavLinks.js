import React from "react";
import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
const NavLinks = ({ toggleSidebar }) => {
	const links = [
		{
			id: 1,
			text: "stats",
			path: "/",
			icon: <IoBarChartSharp />,
		},
		{
			id: 2,
			text: "all records",
			path: "all-records",
			icon: <MdQueryStats />,
		},
	];
	return (
		<div className="nav-links">
			{links.map((link) => {
				const { text, path, id, icon } = link;

				return (
					<NavLink
						to={path}
						key={id}
						className={({ isActive }) => {
							return isActive ? "nav-link active" : "nav-link";
						}}
						onClick={toggleSidebar}
					>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};

export default NavLinks;
