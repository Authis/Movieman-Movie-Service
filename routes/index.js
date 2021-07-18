const express = require("express");
const router = express.Router();

const movieRoute = require("./movie-route");

router.use("/movie", movieRoute);

module.exports = router;
