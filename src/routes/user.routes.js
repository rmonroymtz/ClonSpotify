"use strict";

const router = require("express").Router();
const multipart = require("connect-multiparty");
const md_upload = multipart({ uploadDir: "./src/uploads/users" });
const { UserControllers } = require("../controllers");
const md_auth = require("../middlewares/authenticated");

router.post("/login", UserControllers.loginUser);
router.post("/register", UserControllers.registerUser);
router.put("/update/:userId", md_auth.ensureAuth, UserControllers.updateUser);
router.post(
  "/upload-image/:userId",
  [md_auth.ensureAuth, md_upload],
  UserControllers.uploadImage
);
router.get("/get-image/:imageFile", UserControllers.getImage)
router.get("/test", md_auth.ensureAuth, (req, res) => {
  res.send("probando el controlador");
});
module.exports = router;
