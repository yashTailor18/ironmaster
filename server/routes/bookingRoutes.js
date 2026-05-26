const express = require("express");

const router = express.Router();

const {
  createBooking,
  trackOrder,
} = require("../controllers/bookingController");


// CREATE BOOKING ROUTE
router.post("/create", createBooking);


// TRACK ORDER ROUTE
router.get("/track/:orderId", trackOrder);


module.exports = router;