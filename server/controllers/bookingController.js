const Booking = require("../models/Booking");
const transporter = require("../config/nodemailer");
const Driver = require("../models/Driver");

// CREATE BOOKING
const createBooking = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      address,
      service,
      pickupDate,
    } = req.body;

    const newBooking = new Booking({
      fullName,
      phone,
      email,
      address,
      service,
      pickupDate,

      orderId:
        "IRON" +
        Math.floor(100000 + Math.random() * 900000),
    });

    await newBooking.save();

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "IronMaster Booking Confirmation 🚀",

        html: `
          <div style="font-family: Arial; padding: 20px;">
            <h1 style="color: black;">
              Booking Confirmed ✅
            </h1>

            <p>Hello ${fullName},</p>

            <p>
              Your IronMaster booking has been successfully confirmed.
            </p>

            <h2>
              Order ID: ${newBooking.orderId}
            </h2>

            <p>
              <strong>Service:</strong> ${service}
            </p>

            <p>
              <strong>Pickup Date:</strong> ${pickupDate}
            </p>

            <p>
              <strong>Status:</strong> Pending
            </p>

            <br />

            <p>
              Thank you for choosing IronMaster 🚀
            </p>
          </div>
        `,
      });

      console.log("Email Sent Successfully ✅");
    } catch (emailError) {
      console.log("Email Sending Failed ❌");
      console.log(emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully 🚀",
      booking: newBooking,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// TRACK ORDER
const trackOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const booking = await Booking.findOne({
      orderId,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// GET ALL BOOKINGS
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
  .populate("driverId")
  .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE STATUS
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true }
    );
    if (
  orderStatus === "Delivered" &&
  booking.driverId
) {
  await Driver.findByIdAndUpdate(
    booking.driverId,
    {
      status: "Available",
    }
  );
}

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking Not Found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const assignDriver = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      driverId,
      driverName,
      driverPhone,
      bikeNumber,
    } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        driverId,
        driverName,
        driverPhone,
        bikeNumber,
      },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking Not Found",
      });
    }

    if (driverId) {
      await Driver.findByIdAndUpdate(
        driverId,
        {
          status: "Busy",
        }
      );
    }

    res.status(200).json({
      success: true,
      booking,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
module.exports = {
  createBooking,
  trackOrder,
  getAllBookings,
  updateStatus,
  assignDriver,
};