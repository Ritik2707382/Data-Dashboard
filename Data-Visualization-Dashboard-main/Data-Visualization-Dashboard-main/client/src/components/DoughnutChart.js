import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DoughnutChart = ({ chartData }) => {
	let uniqueSectors = [];

	chartData.forEach((element) => {
		if (
			!uniqueSectors.includes(element.sector) &&
			element.sector !== "" &&
			element.sector !== null
		) {
			uniqueSectors.push(element.sector);
		}
	});
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
	let uniqueRegion = [];

	chartData.forEach((element) => {
		if (
			!uniqueRegion.includes(element.region) &&
			element.region !== "" &&
			element.region !== null
		) {
			uniqueRegion.push(element.region);
		}
	});
	let uniqueCountry = [];

	chartData.forEach((element) => {
		if (
			!uniqueCountry.includes(element.country) &&
			element.country !== "" &&
			element.country !== null
		) {
			uniqueCountry.push(element.country);
		}
	});
	let uniqueSource = [];

	chartData.forEach((element) => {
		if (
			!uniqueSource.includes(element.source) &&
			element.source !== "" &&
			element.source !== null
		) {
			uniqueSource.push(element.source);
		}
	});
	let uniquePestle = [];

	chartData.forEach((element) => {
		if (
			!uniquePestle.includes(element.pestle) &&
			element.pestle !== "" &&
			element.pestle !== null
		) {
			uniquePestle.push(element.pestle);
		}
	});

	// console.log(uniqueSectors);
	const label = ["Country", "Region", "Source", "Topic", "Sector", "Pestle"];
	return (
		<div style={{ height: "50vh" }}>
			<Doughnut
				data={{
					labels: label,
					datasets: [
						{
							label: "Total Value: ",
							data: [
								uniqueCountry.length,
								uniquePestle.length,
								uniqueRegion.length,
								uniqueSectors.length,
								uniqueSource.length,
								uniqueTopics.length,
							],
							borderWidth: 1,
							hoverOffset: 5
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

export default DoughnutChart;
