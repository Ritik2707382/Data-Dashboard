import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChartForIntensity = ({ chartData }) => {
	let uniqueIntensity = [];
	chartData.forEach((element) => {
		if (
			!uniqueIntensity.includes(element.intensity) &&
			element.intensity !== "" &&
			element.intensity !== null
		) {
			uniqueIntensity.push(element.intensity);
		}
	});

	const intensityCount = uniqueIntensity.map((item) => {
		return {
			intensity: item,
			count: chartData.filter((i) => i.intensity === item).length,
		};
	});

	// console.log(intensityCount);

	// console.log(uniqueIntensity);
	return (
		<div style={{ height: "50vh" }}>
			<Bar
				data={{
					labels: uniqueIntensity.map((e) => e),
					datasets: [
						{
							label: "Intensity Value: ",
							data: intensityCount.map((e) => e.count),
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

export default BarChartForIntensity;
