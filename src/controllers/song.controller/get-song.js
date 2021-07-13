"use strict";

const Song = require("../../models/song.model");

module.exports = async function getSong(req, res) {
  const { idSong } = req.params;
  const song = await Song.findById(idSong)
    .populate({ path: "album" })
    .exec()
    .catch((error) => {
      res
        .status(500)
        .send({ message: "Error en la consulta de la base de datos", error });
    });
  if (!song) {
    res.status(404).send({
      message: "La canción no existe",
    });
  } else {
    res.status(200).send({ song });
  }
};
