import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PieChart = ({ chartData }) => {
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

	const pestleCount = uniquePestle.map((item) => {
		return {
			pestle: item,
			count: chartData.filter((i) => i.pestle === item).length,
		};
	});
	return (
		<div style={{ height: "50vh" }}>
			<Pie
				data={{
					labels: uniquePestle,
					datasets: [
						{
							label: "Records: ",
							data: pestleCount.map((ele) => ele.count),
							borderWidth: 1,
							backgroundColor: [
								"rgb(255, 99, 132)",
								"rgb(54, 162, 235)",
								"rgb(255, 205, 86)",
								"rgb(204, 153, 255)",
								"rgb(255, 153, 0)",
								"rgb(255, 51, 153)",
								"rgb(102, 51, 0)",
								"rgb(102, 102, 0)",
								"rgb(102, 153, 51)",
							],
							hoverOffset: 5,
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

export default PieChart;
