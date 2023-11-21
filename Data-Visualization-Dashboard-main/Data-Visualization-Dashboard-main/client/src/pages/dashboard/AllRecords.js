import React, { useState } from "react";
import axios from "axios";
import Record from "../../components/Record";
import Wrapper from "../../assets/wrappers/JobsContainer";
import Loading from "../../components/Loading";
import SearchWrapper from "../../assets/wrappers/SearchContainer";
import FilterByYear from "../../components/FilterByYear";

const AllRecords = ({ data, setData }) => {
	// console.log(data);
	const [limit, setLimit] = useState(10);
	const limitedData = data.slice(0, limit);

	const [search, setSearch] = useState("");
	// console.log(limitedData);
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
				{limitedData && limitedData.length === 0 ? (
					<h2>No records to display...</h2>
				) : limitedData && limitedData.length > 0 ? (
					<div className="jobs">
						{limitedData.map((record, index) => {
							return <Record key={index} record={record} />;
						})}
					</div>
				) : (
					<Loading center />
				)}
				<div className="d-flex justify-content-center align-items-center">
					<button
						type="button"
						className="btn"
						onClick={() => setLimit((prev) => prev + 6)}
						style={{ marginTop: "1rem" }}
					>
						Show More
					</button>
				</div>
			</Wrapper>
		</>
	);
};

export default AllRecords;
