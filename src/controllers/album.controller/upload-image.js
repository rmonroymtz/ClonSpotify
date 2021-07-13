"use stric";
const Album = require("../../models/album.model");

module.exports = function uploadImage(req, res) {
  const { albumId } = req.params;
  const fileName = "No subido";
  if (req.files) {
    const file_path = req.files.image.path;
    const file_split = file_path.split("\\");
    const file_name = file_split[3];
    const ext_split = file_name.split(".");
    const file_ext = ext_split[1];
    if (file_ext === "png" || file_ext === "jpg" || file_ext === "gif") {
      Album.findByIdAndUpdate(
        albumId,
        { image: file_name },
        (err, artistUpdated) => {
          if (err) {
            res.statu(500).send({
              message: "Error al actualizar la portada de artista",
            });
          } else {
            res.status(200).send({
              message: "Imagén actualizada",
              artist: artistUpdated,
            });
          }
        }
      );
    } else {
      res.status(401).send({
        message: "Extensión de imagén no valida",
      });
    }
  } else {
    res.status(400).send({
      message: "No se ha subido ninguna imagén",
    });
  }
};
