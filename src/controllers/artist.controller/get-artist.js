const path = require("path");
const fs = require("fs");
const Artist = require("../../models/artist.model");
const Album = require("../../models/album.model");
const Song = require("../../models/song.model");

module.exports = function getArtist(req, res) {
  const { artistId } = req.params;

  Artist.findById(artistId, (err, artist) => {
    if (err) {
      res.status(500).send({
        message: "Error en la petición",
      });
    } else {
      if (!artist) {
        res.status(404).send({
          message: "El artista no existe",
        });
      } else {
        res.status(200).send({ artist });
      }
    }
  });
};
