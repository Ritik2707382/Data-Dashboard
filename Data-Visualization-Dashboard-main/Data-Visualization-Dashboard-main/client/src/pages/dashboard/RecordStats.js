import React from "react";
import StatsContainer from "../../components/StatsContainer";
import ChartsContainer from "../../components/ChartsContainer";

const RecordStats = ({ chartData, setData }) => {
	return (
		<>
			<StatsContainer />
			<ChartsContainer chartData={chartData} setData={setData} />
		</>
	);
};

export default RecordStats;
