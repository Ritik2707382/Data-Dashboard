import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChartForYear = ({ chartData }) => {
	let uniqueYear = [];
	chartData.forEach((element) => {
		if (
			!uniqueYear.includes(element.end_year) &&
			element.end_year !== "" &&
			element.end_year !== null
		) {
			uniqueYear.push(element.end_year);
		}
	});

	const yearCount = uniqueYear.map((item) => {
		return {
			year: item,
			count: chartData.filter((i) => i.end_year === item).length,
		};
	});
	return (
		<div style={{ height: "50vh" }}>
			<Line
				data={{
					labels: uniqueYear,
					datasets: [
						{
							label: "Year: ",
							data: yearCount.map((e) => e.count),
							borderWidth: 1,
							fill: true,
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

export default LineChartForYear;
