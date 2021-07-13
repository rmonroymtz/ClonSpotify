"use strict";
const Album = require("../../models/album.model");

module.exports = async function (req, res) {
  const { albumId } = req.params;
  const { body } = req;

  const albumUpdated = await Album.findByIdAndUpdate(albumId, body).catch(
    (err) => {
      console.error(err);
      res.status(500).send({ message: "Hubo un error en el servidor" });
    }
  );

  if (!albumUpdated) {
    res.status(404).send({ message: "No se encontro el album a actualizar" });
  } else {
    res.status(200).send({
      message: "Album actualizado correctamente",
      album: albumUpdated,
    });
  }
};
