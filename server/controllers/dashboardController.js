const Booking = require("../models/Booking");

const getDashboardStats = async (req, res) => {
  try {

    const totalOrders = await Booking.countDocuments();

    const pendingOrders = await Booking.countDocuments({
      orderStatus: "Pending",
    });

    const pickedUpOrders = await Booking.countDocuments({
      orderStatus: "Picked Up",
    });

    const processingOrders = await Booking.countDocuments({
      orderStatus: "Processing",
    });

    const outForDeliveryOrders = await Booking.countDocuments({
      orderStatus: "Out For Delivery",
    });

    const deliveredOrders = await Booking.countDocuments({
      orderStatus: "Delivered",
    });

    res.status(200).json({
      success: true,

      stats: {
        totalOrders,
        pendingOrders,
        pickedUpOrders,
        processingOrders,
        outForDeliveryOrders,
        deliveredOrders,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getDashboardStats,
};