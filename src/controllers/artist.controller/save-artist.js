"use strict";
const Artist = require("../../models/artist.model")

module.exports = function saveArtist(req, res) {
  const artist = new Artist();

  const { name, description, image } = req.body;
  artist.name = name;
  artist.description = description;
  artist.image = image;

  artist.save((err, artistStored) => {
    if (err) {
      res.status(500).send({
        message: "Error al intentar guardar el artista",
      });
    } else {
      if (!artistStored) {
        res.status(404).send({
          message: "El artista no ha sido guardado",
        });
      } else {
        res.status(200).send({
          artist: artistStored,
        });
      }
    }
  });
};
