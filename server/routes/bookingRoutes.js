const express = require("express");

const router = express.Router();

const {
  createBooking,
  trackOrder,
  updateStatus,
  getAllBookings,
  assignDriver,
} = require("../controllers/bookingController");

// CREATE BOOKING
router.post("/create", createBooking);

// TRACK ORDER
router.get("/track/:orderId", trackOrder);

// GET ALL BOOKINGS
router.get("/all", getAllBookings);

// UPDATE STATUS
router.put("/status/:id", updateStatus);

// ASSIGN DRIVER
router.put("/assign-driver/:id", assignDriver);

module.exports = router;