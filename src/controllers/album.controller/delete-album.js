"use strict";

const Album = require("../../models/album.model");
const Song = require("../../models/song.model")

module.exports = async function deleteAlbum(req, res) {
  const { albumId } = req.params;

  const albumRemoved = await Album.findByIdAndRemove(albumId)
    .remove()
    .catch((error) => {
      res.status(500).send({
        message: "Hubo un error al intentar eliminar el album",
      });
    });

  if (!albumRemoved) {
    res.status(404).send({
      message: "No se elimino el album",
    });
  } else {
    const songRemoved = await Song.find({ album: albumRemoved._id })
      .remove()
      .catch((error) => {
        res.status(500).send({
          message: "Error al intentar aliminar las canciones",
        });
      });
    if (!songRemoved) {
      res.status(404).send({ message: "No se han eliminado las canciones" });
    } else {
      res.status(200).send({
        message: "Album",
        album: albumRemoved,
      });
    }
  }
};
