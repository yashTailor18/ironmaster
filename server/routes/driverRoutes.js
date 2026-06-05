const express = require("express");

const router = express.Router();

const {
  createDriver,
  getDrivers,
  deleteDriver,
} = require("../controllers/driverController");

router.post("/create", createDriver);

router.get("/all", getDrivers);

router.delete("/:id", deleteDriver);

module.exports = router;