import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Job";
import RecordInfo from "./RecordInfo";
import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import { MdCategory, MdPublish, MdInsights } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";
import { GrResources } from "react-icons/gr";
import { GiWorld } from "react-icons/gi";
import {RiNumbersLine} from "react-icons/ri";

const Record = ({ record }) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<Wrapper>
			<header>
				<div className="main-icon">
					{record.title ? record.title.charAt(0) : "No info"}
				</div>
				<div className="info">
					<h5>{record.sector ? record.sector : "No info"}</h5>
					<p>{record.topic ? record.topic : "No info"}</p>
					<p>
						{record.title
							? `${
									readMore
										? record.title
										: `${record.title.substring(0, 60)}...`
							  }`
							: "No info"}
						<button onClick={() => setReadMore(!readMore)} className="btn-text">
							{readMore ? "show less" : "  read more"}
						</button>
					</p>
				</div>
			</header>
			<div className="content">
				<div className="content-center">
					<RecordInfo
						icon={<FaLocationArrow />}
						text={
							record.country
								? `${
										record.country.length > 10
											? `${record.country.substring(0, 10)}...`
											: record.country
								  }`
								: "No Info"
						}
					/>
					<RecordInfo
						icon={<FaCalendarAlt />}
						text={record.start_year ? `Start: ${record.start_year}` : "No Info"}
					/>
					<RecordInfo
						icon={<FaCalendarAlt />}
						text={record.end_year ? `End: ${record.end_year}` : "No Info"}
					/>
					<RecordInfo
						icon={<MdCategory />}
						text={record.pestle ? `${record.pestle}` : "No Info"}
					/>
					<RecordInfo
						icon={<VscDiffAdded />}
						text={
							record.added
								? `${
										record.added.length > 11
											? `${record.added.substring(0, 16)}...`
											: record.added
								  }`
								: "No Info"
						}
					/>
					<RecordInfo
						icon={<MdPublish />}
						text={
							record.published
								? `${
										record.published.length > 12
											? `${record.published.substring(0, 16)}...`
											: record.published
								  }`
								: "No Info"
						}
					/>
					<RecordInfo
						icon={<GiWorld />}
						text={
							record.region
								? `${
										record.region.length > 12
											? `${record.region.substring(0, 16)}...`
											: record.region
								  }`
								: "No Info"
						}
					/>
					<RecordInfo
						icon={<GrResources />}
						text={
							record.source
								? `${
										record.source.length > 12
											? `${record.source.substring(0, 16)}...`
											: record.source
								  }`
								: "No Info"
						}
					/>
					<RecordInfo
						icon={<MdInsights />}
						text={
							record.insight
								? `${
										record.insight.length > 12
											? `${record.insight.substring(0, 16)}...`
											: record.insight
								  }`
								: "No Info"
						}
					/>
					<RecordInfo
						icon={<TbWorldWww />}
						text={
							record.url
								? `${
										record.url.length > 12
											? `${record.url.substring(0, 16)}...`
											: record.url
								  }`
								: "No Info"
						}
					/>
                    <RecordInfo
						icon={<RiNumbersLine />}
						text={record.likelihood ? `Likelihood: ${record.likelihood}` : "No Info"}
					/>
                    <RecordInfo
						icon={<RiNumbersLine />}
						text={record.intensity ? `Intensity: ${record.intensity}` : "No Info"}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default Record;
