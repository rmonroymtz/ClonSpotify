"use strict";

const userRoutes = require("./user.routes");
const artistRoutes = require("./artist.routes");
const albumRoutes = require("./album.routes");
const router = require("express").Router();

router.use("/user", userRoutes);
router.use("/artist", artistRoutes);
router.use("/album", albumRoutes);
module.exports = router;
