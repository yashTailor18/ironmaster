const driverRoutes = require("./routes/driverRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dashboardRoutes = require(
  "./routes/dashboardRoutes"
);
const exportRoutes = require(
  "./routes/exportRoutes"
);

const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");

require("dotenv").config();

const requiredEnvs = [
  "MONGO_URI",
  "JWT_SECRET",
  "EMAIL_USER",
  "EMAIL_PASS",
];

const missingEnvs = requiredEnvs.filter(
  (name) => !process.env[name]
);


if (missingEnvs.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvs.join(", ")}`
  );
  process.exit(1);
}

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
app.use(
  "/api/export",
  exportRoutes
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