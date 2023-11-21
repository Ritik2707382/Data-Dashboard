import React from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

const FilterByYear = ({ setData }) => {

    const handleSelect = (eventKey, event) => {
        fetchData(event.target.innerText)
    }

    const fetchData = async(year) => {
        try {
            const response = await axios.get(`https://dashboard-record-bhanu.onrender.com/api/v1/records/year/${year}`)
            setData(response.data.records)
        } catch (error) {
            console.log(error);
        }
    }

    const handleReset = async() => {
        try {
            const response = await axios.get('https://dashboard-record-bhanu.onrender.com/api/v1/records')
            setData(response.data.records)
        } catch (error) {
            console.log(error);
        }
    }

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				margin: "1rem 2rem",
				width: "40vw",
				gap: "4rem",
			}}
		>
			<Dropdown onSelect={handleSelect}>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Filter By Year
				</Dropdown.Toggle>
				<Dropdown.Menu flip>
					<Dropdown.Item eventKey="1">2014</Dropdown.Item>
					<Dropdown.Item eventKey="2">2015</Dropdown.Item>
					<Dropdown.Item eventKey="3">2016</Dropdown.Item>
					<Dropdown.Item eventKey="4">2017</Dropdown.Item>
					<Dropdown.Item eventKey="5">2018</Dropdown.Item>
					<Dropdown.Item eventKey="6">2019</Dropdown.Item>
					<Dropdown.Item eventKey="7">2020</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<button className="btn btn-danger" onClick={handleReset}>Clear Filters</button>
		</div>
	);
};

export default FilterByYear;
