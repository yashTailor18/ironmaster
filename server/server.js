const driverRoutes = require("./routes/driverRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dashboardRoutes = require(
  "./routes/dashboardRoutes"
);

const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");

require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);
app.use(
  "/api/dashboard",
  dashboardRoutes
);
app.use("/api/drivers", driverRoutes);
// TEST ROUTE
app.get("/", (req, res) => {
  res.send("IronMaster Backend Running 🚀");
});

// PORT
const PORT = process.env.PORT || 5000;

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });