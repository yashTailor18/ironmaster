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
    // MONTHLY REVENUE
const monthlyRevenueData = await Booking.find({
  paymentStatus: "Paid",
});

const monthlyRevenue = monthlyRevenueData.reduce(
  (total, booking) => total + (booking.amount || 0),
  0
);

// TODAY'S REVENUE
const today = new Date();

today.setHours(0, 0, 0, 0);

const todaysRevenueData = await Booking.find({
  paymentStatus: "Paid",
  updatedAt: {
    $gte: today,
  },
});

const todaysRevenue = todaysRevenueData.reduce(
  (total, booking) => total + (booking.amount || 0),
  0
);

// PAID ORDERS
const paidOrders = await Booking.countDocuments({
  paymentStatus: "Paid",
});

// PENDING PAYMENTS
const pendingPaymentsData = await Booking.find({
  paymentStatus: "Pending",
});

const pendingPayments = pendingPaymentsData.reduce(
  (total, booking) => total + (booking.amount || 0),
  0
);

    res.status(200).json({
      success: true,

      stats: {
  totalOrders,
  pendingOrders,
  pickedUpOrders,
  processingOrders,
  outForDeliveryOrders,
  deliveredOrders,

  monthlyRevenue,
  todaysRevenue,
  paidOrders,
  pendingPayments,
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