const { ArtistControllers } = require("../controllers");

const router = require("express").Router();
const md_auth = require("../middlewares/authenticated");
const multipart = require("connect-multiparty");
const md_upload = multipart({ uploadDir: "./src/uploads/artist" });

router.get("/get/:artistId", md_auth.ensureAuth, ArtistControllers.getArtist);
router.get("/all/:page?", md_auth.ensureAuth, ArtistControllers.getAllArtist);
router.get("/image/:imageFile", md_auth.ensureAuth, ArtistControllers.getImage);
router.post("/save", md_auth.ensureAuth, ArtistControllers.saveArtist);
router.put(
  "/update/:artistId",
  md_auth.ensureAuth,
  ArtistControllers.updateArtist
);
router.delete(
  "/delete/:artistId",
  md_auth.ensureAuth,
  ArtistControllers.deleteArtist
);
router.post(
  "/upload/:artistId",
  [md_auth.ensureAuth, md_upload],
  ArtistControllers.uploadImage
);

module.exports = router;
