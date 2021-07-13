"use strict";
const { SongControllers } = require("../controllers");
const router = require("express").Router();
const md_auth = require("../middlewares/authenticated");
const multipart = require("connect-multiparty");
const md_upload = multipart({ uploadDir: "./src/uploads/songs" });
router.get("/get/:idSong?", md_auth.ensureAuth, SongControllers.getSong);
router.post("/save", md_auth.ensureAuth, SongControllers.saveSong);
router.get("/album/:albumId?", md_auth.ensureAuth, SongControllers.getSongs);
router.put("/update/:songId", md_auth.ensureAuth, SongControllers.updateSong);
router.delete(
  "/delete/:songId",
  md_auth.ensureAuth,
  SongControllers.deleteSong
);
router.post(
  "/upload/:songId",
  [md_auth.ensureAuth, md_upload],
  SongControllers.uploadSong
);
router.get(
  "/get-file/:songFile",
  [md_upload, md_auth.ensureAuth],
  SongControllers.getSongFile
);
module.exports = router;
