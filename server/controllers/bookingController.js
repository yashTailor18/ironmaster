const Booking = require("../models/Booking");

const transporter = require("../config/nodemailer");


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

    // CREATE NEW BOOKING
    const newBooking = new Booking({

      fullName,
      phone,
      email,
      address,
      service,
      pickupDate,

      // GENERATE ORDER ID
      orderId:
        "IRON" +
        Math.floor(
          100000 + Math.random() * 900000
        ),

    });

    // SAVE TO DATABASE
    await newBooking.save();

    // SEND EMAIL (SAFE MODE)
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

    // SUCCESS RESPONSE
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

    // FIND BOOKING
    const booking = await Booking.findOne({
      orderId,
    });

    // ORDER NOT FOUND
    if (!booking) {

      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });

    }

    // SUCCESS
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


module.exports = {
  createBooking,
  trackOrder,
};