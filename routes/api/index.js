const router = require("express").Router();
// const apiRoutes = require("./api");
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

//user routes
router.use("/user", userRoutes);

//thought routes
router.use("/thoughts", thoughtRoutes);

module.exports = router;
