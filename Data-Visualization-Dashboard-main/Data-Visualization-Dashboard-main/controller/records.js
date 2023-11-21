const Record = require("../model/Record");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllRecords = async (req, res) => {
	const {
		topic,
		title,
		sector,
		region,
		country,
		pestle,
		source,
		intensity,
		likelihood,
		search,
	} = req.query;
	let queryObject = {};

	if (topic) {
		if (topic.length < 3) {
			throw new CustomError.BadRequestError("topic is not valid");
		}
		queryObject.topic = { $regex: topic, $options: "i" };
	}

	if (title) {
		if (title.length < 3) {
			throw new CustomError.BadRequestError("title is not valid");
		}
		queryObject.title = { $regex: title, $options: "i" };
	}

	if (sector) {
		if (sector.length < 3) {
			throw new CustomError.BadRequestError("Sector is not valid");
		}
		queryObject.sector = { $regex: sector, $options: "i" };
	}
	if (region) {
		if (region.length < 3) {
			throw new CustomError.BadRequestError("Region is not valid");
		}
		queryObject.region = { $regex: region, $options: "i" };
	}
	if (country) {
		if (country.length < 3) {
			throw new CustomError.BadRequestError("Country is not valid");
		}
		queryObject.country = { $regex: country, $options: "i" };
	}
	if (pestle) {
		if (pestle.length < 3) {
			throw new CustomError.BadRequestError("Pestle is not valid");
		}
		queryObject.pestle = { $regex: pestle, $options: "i" };
	}
	if (source) {
		if (source.length < 3) {
			throw new CustomError.BadRequestError("Source is not valid");
		}
		queryObject.source = { $regex: source, $options: "i" };
	}
	if (intensity) {
		queryObject.intensity = parseInt(intensity);
	}
	if (likelihood) {
		queryObject.likelihood = parseInt(likelihood);
	}
	if (search) {
		if (search.length < 3) {
			throw new CustomError.BadRequestError("Source is not valid");
		}
		queryObject = {
			$or: [
				{ sector: { $regex: search, $options: "i" } },
				{ topic: { $regex: search, $options: "i" } },
				{ insight: { $regex: search, $options: "i" } },
				{ title: { $regex: search, $options: "i" } },
				{ pestle: { $regex: search, $options: "i" } },
				{ source: { $regex: search, $options: "i" } },
				{ url: { $regex: search, $options: "i" } },
			],
		};
	}

	const records = await Record.find(queryObject);

	if (!records || records.length === 0) {
		throw new CustomError.NotFoundError("NO RECORD FOUND");
	}
	res.status(StatusCodes.OK).json({ count: records.length, records });
};

const getRecordByYear = async (req, res) => {
	const { year } = req.params;
	if (year.length !== 4) {
		throw new CustomError.BadRequestError("Invalid year");
	}

	// const records = await Record.find({
	// 	end_year: year,
	// });

	const records = await Record.find({
		$or: [
			{ start_year: year },
			{ end_year: year },
			{ published: { $regex: year, $options: "i" } },
			{ added: { $regex: year, $options: "i" } },
		],
	});
	if (!records || records.length === 0) {
		throw new CustomError.NotFoundError("NO RECORD FOUND");
	}
	res.status(StatusCodes.OK).json({ count: records.length, records });
};

module.exports = {
	getAllRecords,
	getRecordByYear,
};
