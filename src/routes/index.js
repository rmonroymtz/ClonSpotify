"use strict";

const userRoutes = require("./user.routes");
const artistRoutes = require("./artist.routes");
const router = require("express").Router();

router.use("/user", userRoutes);
router.use("/artist", artistRoutes);
module.exports = router;
