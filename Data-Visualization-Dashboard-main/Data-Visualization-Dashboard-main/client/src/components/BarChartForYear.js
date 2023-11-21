import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChartForYear = ({ chartData }) => {
	let uniqueYear = [];
	chartData.forEach((element) => {
		if (
			!uniqueYear.includes(element.start_year) &&
			element.start_year !== "" &&
			element.start_year !== null
		) {
			uniqueYear.push(element.start_year);
		}
	});

	const yearCount = uniqueYear.map((item) => {
		return {
			year: item,
			count: chartData.filter((i) => i.start_year === item).length,
		};
	});
	return (
		<div style={{ height: "50vh" }}>
			<Bar
				data={{
					labels: uniqueYear,
					datasets: [
						{
							label: "Year: ",
							data: yearCount.map((e) => e.count),
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

export default BarChartForYear;
