import React from "react";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";
import { GiTakeMyMoney, GiPlanetConquest, GiFactory } from "react-icons/gi";

const StatsContainer = () => {
	const defaultStats = [
		{
			title: "Economic",
			count: 329,
			icon: <GiTakeMyMoney />,
			color: "#e9b949",
			bcg: "#fcefc7",
		},
		{
			title: "Environmental",
			count: 72,
			icon: <GiPlanetConquest />,
			color: "#669900",
			bcg: "#DAF7A6",
		},
		{
			title: "Industries",
			count: 329,
			icon: <GiFactory />,
			color: "#647acb",
			bcg: "#e0e8f9",
		},
	];
	return (
		<Wrapper>
			{defaultStats.map((item, index) => {
				return <StatItem key={index} {...item} />;
			})}
		</Wrapper>
	);
};

export default StatsContainer;
