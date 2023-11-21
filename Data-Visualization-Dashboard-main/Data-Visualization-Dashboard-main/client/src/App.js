import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllRecords, RecordStats, SharedLayout } from "./pages/dashboard";
import Error from "./pages/Error";
import Loading from "./components/Loading";
function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const fetchRecord = async () => {
		try {
			const fetchData = await axios.get(
				"https://dashboard-record-bhanu.onrender.com/api/v1/records"
			);
			// console.log(fetchData.data.records);
			setData(fetchData.data.records);
			console.log(fetchData.data.records);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchRecord();
	}, []);

	if (isLoading) {
		return <Loading center />;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<RecordStats chartData={data} setData={setData} />} />
					<Route
						path="all-records"
						element={<AllRecords data={data} setData={setData} />}
					/>
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
