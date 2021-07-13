"use strict";
const Song = require("../../models/song.model");

module.exports = async function getSongs(req, res) {
  const albumId = req.params.albumId;
  let find;
  if (!albumId) {
    find = await Song.find({})
      .sort("number")
      .catch((error) => {
        res.status(500).send({
          message: "internal error",
          error,
        });
      });
  } else {
    find = await Song.find({ album: albumId })
      .sort("number")
      .catch((error) => {
        res.status(500).send({
          message: "internal error",
          error,
        });
      });
  }
  if (!find) {
    res.status(404).send({
      message: "No se encontraron canciones",
    });
  } else {
    res.status(200).send({
      songs: find,
    });
  }
};
