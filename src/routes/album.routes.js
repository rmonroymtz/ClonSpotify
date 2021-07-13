const { AlbumControllers } = require("../controllers");
const router = require("express").Router();
const md_auth = require("../middlewares/authenticated");
const multipart = require("connect-multiparty");
const md_upload = multipart({ uploadDir: "./src/uploads/albums" });

router.get("/get/:albumId", md_auth.ensureAuth, AlbumControllers.getAlbum);
router.post("/", md_auth.ensureAuth, AlbumControllers.saveAlbum);
router.get("/all/:artistId?", md_auth.ensureAuth, AlbumControllers.getAll);
router.put(
  "/update/:albumId",
  md_auth.ensureAuth,
  AlbumControllers.updateAlbum
);
router.delete(
  "/delete/:albumId",
  md_auth.ensureAuth,
  AlbumControllers.deleteAlbum
);

router.post(
  "/upload/:albumId",
  [md_auth.ensureAuth, md_upload],
  AlbumControllers.uploadImage
);
router.get("/image/:imageFile", md_auth.ensureAuth, AlbumControllers.getImage);
module.exports = router;
