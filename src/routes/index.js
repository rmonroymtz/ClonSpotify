"use strict";

const userRoutes = require("./user.routes");
const artistRoutes = require("./artist.routes");
const albumRoutes = require("./album.routes");
const songRoutes = require("./song.routes");
const router = require("express").Router();

router.use("/user", userRoutes);
router.use("/artist", artistRoutes);
router.use("/album", albumRoutes);
router.use("/song", songRoutes);
module.exports = router;
