"use strict";
const Album = require("../../models/album.model");

module.exports = async function getAlbum(req, res) {
  const { albumId } = req.params;

  const album = await Album.findById(albumId)
    .populate({ path: "artist" })
    .exec()
    .catch((err) =>
      res
        .status(500)
        .send({ message: "Hubo un error en la consulta del album", err })
    );

  if (!album) {
    res.status(404).send({
      message: `Hubo un error al intentar obtener el album`,
    });
  } else {
    res.status(200).send({
      message: "Album obtenido",
      album,
    });
  }
};
