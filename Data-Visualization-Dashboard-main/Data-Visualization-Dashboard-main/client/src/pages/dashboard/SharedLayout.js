import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSidebar, SmallSidebar, Navbar } from "../../components";

const SharedLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<Wrapper>
			<main className="dashboard">
				<SmallSidebar
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
				<BigSidebar isSidebarOpen={isSidebarOpen} />
				<div>
					<Navbar
						isSidebarOpen={isSidebarOpen}
						setIsSidebarOpen={setIsSidebarOpen}
					/>
					<div className="dashboard-page">
						<Outlet />
					</div>
				</div>
			</main>
		</Wrapper>
	);
};

export default SharedLayout;
