const User = require("../../models/user.model");
module.exports = function uploadImage(req, res) {
  const { userId } = req.params;
  const file_name = "no_upload";

  if (req.files) {
    const file_path = req.files.image.path;
    const file_split = file_path.split("\\");
    const file_name = file_split[3];
    const ext_split = file_name.split(".");
    const file_ext = ext_split[1];
    if (file_ext === "png" || file_ext === "jpg" || file_ext === "gif") {
      User.findByIdAndUpdate(
        userId,
        { image: file_name },
        (err, userUpdate) => {
          if (err) {
            res.status(500).send({
              message: "Error update the image profile",
            });
          } else {
            res.status(200).send({
              message: "image updated",
              user: userUpdate,
              image: file_name,
            });
          }
        }
      );
    } else {
      res.status(200).send({
        message: "file extension is not valid",
      });
    }
  } else {
    res.status(200).send({
      message: "No se ha subido ninguna imagén",
    });
  }
};
