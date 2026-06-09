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

    // DRIVER DETAILS
    driverName: {
      type: String,
      default: "",
    },

    driverPhone: {
      type: String,
      default: "",
    },

    bikeNumber: {
      type: String,
      default: "",
    },
    driverId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Driver",
  default: null,
},
paymentStatus: {
  type: String,
  default: "Pending",
},

amount: {
  type: Number,
  default: 0,
},

paymentMethod: {
  type: String,
  default: "",
},
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);