require("dotenv").config();

const mockData = require("./mockData/jsondata.json");

const Record = require("./model/Record");
const connectDB = require("./db/connect");

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		await Record.create(mockData);
		console.log("Success !!!");
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
