import React from "react";
import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const RadarChart = ({ chartData }) => {
	let uniqueTopics = [];

	chartData.forEach((element) => {
		if (
			!uniqueTopics.includes(element.topic) &&
			element.topic !== "" &&
			element.topic !== null
		) {
			uniqueTopics.push(element.topic);
		}
	});
	const topicCount = uniqueTopics.map((item) => {
		return {
			topic: item,
			count: chartData.filter((i) => i.topic === item).length,
		};
	});

	return (
		<div style={{ height: "50vh" }}>
			<Radar
				data={{
					labels: uniqueTopics,
					datasets: [
						{
							label: "Topic: ",
							data: topicCount.map((ele) => ele.count),
							borderWidth: 1,
						},
					],
				}}
				options={{
					maintainAspectRatio: false,

					scales: {
						y: {
							type: "linear",
							beginAtZero: true,
						},
					},
				}}
				height={400}
			/>
		</div>
	);
};

export default RadarChart;
