const router = require("express").Router();
const clientRoutes = require("./clients");
const authRoutes = require("./auth");
const eclientRoutes = require("./homepage");

// Book routes
router.use("/clients", clientRoutes);
router.use("/auth", authRoutes);
router.use("/homepage", eclientRoutes);

module.exports = router;
