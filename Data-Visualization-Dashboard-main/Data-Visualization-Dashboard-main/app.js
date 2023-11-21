require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const recordRouter = require("./routes/recordRoute");
const cors = require("cors");

const notFoundMiddleware = require("./errors/not-found");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Dashboard");
});

app.use("/api/v1/records", recordRouter);
app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => console.log(`Server is listening on ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
