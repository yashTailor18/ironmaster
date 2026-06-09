const express = require("express");

const router = express.Router();

const {
  exportBookings,
} = require("../controllers/exportController");

router.get(
  "/bookings",
  exportBookings
);

module.exports = router;