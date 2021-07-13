"use stric";
const Song = require("../../models/song.model");

module.exports = function uploadSong(req, res) {
  const { songId } = req.params;
  const fileName = "No subido";
  if (Object.entries(req.files)) {
    const file_path = req.files.file.path;
    const file_split = file_path.split("\\");
    const file_name = file_split[3];
    const ext_split = file_name.split(".");
    const file_ext = ext_split[1];
    if (file_ext === "mp3" || file_ext === "ogg") {
      Song.findByIdAndUpdate(
        songId,
        { file: file_name },
        (err, songUpdated) => {
          if (err) {
            res.statu(500).send({
              message: "Error al actualizar la canción",
            });
          } else {
            res.status(200).send({
              message: "Canción actualizada",
              songUpdated,
            });
          }
        }
      );
    } else {
      res.status(201).send({
        message: "Extensión de imagén no valida",
      });
    }
  } else {
    res.status(400).send({
      message: "No se ha subido ninguna imagén",
    });
  }
};
