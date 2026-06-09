const ExcelJS = require("exceljs");
const Booking = require("../models/Booking");

const exportBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    const workbook = new ExcelJS.Workbook();

    const worksheet =
      workbook.addWorksheet("Bookings");

    worksheet.columns = [
      {
        header: "Order ID",
        key: "orderId",
        width: 20,
      },
      {
        header: "Customer",
        key: "fullName",
        width: 25,
      },
      {
        header: "Service",
        key: "service",
        width: 20,
      },
      {
        header: "Driver",
        key: "driverName",
        width: 20,
      },
      {
        header: "Phone",
        key: "phone",
        width: 18,
      },
      {
        header: "Amount",
        key: "amount",
        width: 15,
      },
      {
        header: "Payment Status",
        key: "paymentStatus",
        width: 18,
      },
      {
        header: "Payment Method",
        key: "paymentMethod",
        width: 18,
      },
      {
        header: "Order Status",
        key: "orderStatus",
        width: 20,
      },
      {
        header: "Date",
        key: "date",
        width: 20,
      },
    ];

    bookings.forEach((booking) => {
      worksheet.addRow({
        orderId: booking.orderId,
        fullName: booking.fullName,
        service: booking.service,
        driverName:
          booking.driverName || "-",
        phone: booking.phone,
        amount:
          booking.amount || 0,
        paymentStatus:
          booking.paymentStatus ||
          "Pending",
        paymentMethod:
          booking.paymentMethod ||
          "-",
        orderStatus:
          booking.orderStatus,
        date:
          booking.createdAt
            .toISOString()
            .split("T")[0],
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="bookings-report.xlsx"'
    );

    await workbook.xlsx.write(res);

    res.end();

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  exportBookings,
};