const express = require("express");
const router = express.Router();

const { getAllRecords, getRecordByYear } = require("../controller/records");

router.get("/", getAllRecords);
router.get("/year/:year", getRecordByYear);

module.exports = router;
