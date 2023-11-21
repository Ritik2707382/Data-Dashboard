import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import BarChartForIntensity from "./BarChartForIntensity";
import LineChartForIntensity from "./LineChartForIntensity";
import PolarChart from "./PolarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import LineChartForYear from "./LineChartForYear";
import BarChartForYear from "./BarChartForYear";
import SearchWrapper from "../assets/wrappers/SearchContainer";
import FilterByYear from "./FilterByYear";

import axios from "axios";

const ChartsContainer = ({ chartData, setData }) => {
	const [barChart, setBarChart] = useState(true);
	const [search, setSearch] = useState("");
	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.get(
				`https://dashboard-record-bhanu.onrender.com/api/v1/records?search=${search}`
			);
			setData(response.data.records);
			setSearch("");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<SearchWrapper>
				<form className="form" onSubmit={handleSearch}>
					<h4>Search form</h4>
					<div className="form-center">
						<input
							name="search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search by typing sector name, topic, title, pestle, source, insight, url..."
							className="form-input"
						/>
						<button type="submit" className="btn btn-block">
							Search
						</button>
					</div>
					<FilterByYear setData={setData} />
				</form>
			</SearchWrapper>
			<Wrapper>
				<h4>Intensity</h4>
				<button type="button" onClick={() => setBarChart(!barChart)}>
					{barChart ? "Line Chart" : "Bar Chart"}
				</button>
				{barChart ? (
					<BarChartForIntensity chartData={chartData} />
				) : (
					<LineChartForIntensity chartData={chartData} />
				)}
				<h4 style={{ marginTop: "2rem" }}>Polar Chart</h4>
				<PolarChart chartData={chartData} />
				<h4 style={{ marginTop: "2rem" }}>Pie Chart</h4>
				<PieChart chartData={chartData} />
				<h4 style={{ marginTop: "2rem" }}>Doughnut Chart</h4>
				<DoughnutChart chartData={chartData} />
				<h4 style={{ marginTop: "2rem" }}>Radar Chart</h4>
				<RadarChart chartData={chartData} />
				<h4 style={{ marginTop: "2rem" }}>Year</h4>
				<button type="button" onClick={() => setBarChart(!barChart)}>
					{barChart ? "Line Chart: End Year" : "Bar Chart: Start Year"}
				</button>
				{barChart ? (
					<BarChartForYear chartData={chartData} />
				) : (
					<LineChartForYear chartData={chartData} />
				)}
			</Wrapper>
		</>
	);
};

export default ChartsContainer;
