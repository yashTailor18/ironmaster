const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");

require("dotenv").config();

const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());
app.use("/api/bookings", bookingRoutes);


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