const express = require("express");

const router = express.Router();

const {
loginAdmin,
} = require("../controllers/adminController");

// ADMIN LOGIN
router.post("/login", loginAdmin);

// TEST ROUTE
router.get("/test", (req, res) => {
res.json({
success: true,
message: "Admin Route Working 🚀",
});
});

module.exports = router;
