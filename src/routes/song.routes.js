"use strict";
const { SongControllers } = require("../controllers");
const router = require("express").Router();
const md_auth = require("../middlewares/authenticated");

router.get("/get/:idSong?", md_auth.ensureAuth, SongControllers.getSong);
router.post("/save", md_auth.ensureAuth, SongControllers.saveSong);
router.get("/album/:albumId?", md_auth.ensureAuth, SongControllers.getSongs);
router.put("/update/:songId", md_auth.ensureAuth, SongControllers.updateSong);

module.exports = router;
