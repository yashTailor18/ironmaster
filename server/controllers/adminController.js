const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    console.log("EMAIL RECEIVED:", email);
    console.log("PASSWORD RECEIVED:", password);

    const admin = await Admin.findOne({
      email: email.trim(),
    });

    console.log("ADMIN FOUND:", admin);

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin Not Found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Wrong Password",
      });
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error(
        "JWT_SECRET environment variable is required for JWT token generation."
      );
    }

    console.log("JWT SECRET: [REDACTED]");

    const token = jwt.sign(
      { id: admin._id },
      jwtSecret,
      { expiresIn: "15m" }
    );

    console.log("TOKEN GENERATED");

    res.status(200).json({
      success: true,
      token,
    });

  } catch (error) {

    console.log("FULL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
module.exports = {
  loginAdmin,
};
