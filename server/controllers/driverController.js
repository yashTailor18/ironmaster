const Driver = require("../models/Driver");

// Add Driver
const createDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);

    res.status(201).json({
      success: true,
      driver,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Drivers
const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();

    res.status(200).json({
      success: true,
      drivers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Driver
const deleteDriver = async (req, res) => {
  try {
    await Driver.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Driver Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDriver,
  getDrivers,
  deleteDriver,
};