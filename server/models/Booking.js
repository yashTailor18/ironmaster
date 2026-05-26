const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    pickupDate: {
      type: String,
      required: true,
    },
    orderId: {
  type: String,
  unique: true,
},

    orderStatus: {
      type: String,
      default: "Pending",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);