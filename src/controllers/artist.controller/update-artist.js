"use strict";
const Artist = require("../../models/artist.model");

module.exports = function updateArtist(req, res) {
  const { artistId } = req.params;

  const { body } = req;

  Artist.findByIdAndUpdate(artistId, body, (err, artistUpdated) => {
    if (err) {
      res.status(500).send({ message: "Error al intentar actualizar" });
    } else {
      if (!artistUpdated) {
        res.status(404).send({
          message: "El artista no existe",
        });
      } else {
          res.status(200).send({
              artist: artistUpdated
          })
      }
    }
  });
};
