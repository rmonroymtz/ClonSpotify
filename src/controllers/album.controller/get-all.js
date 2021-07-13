"use strict";

const Album = require("../../models/album.model");

module.exports = async function getAll(req, res) {
  const artistId = req.params.artistId;
  let find;
  if (!artistId) {
    find = await Album.find({})
      .sort("title")
      .populate({ path: "artist" })
      .exec()
      .catch((err) => {
        res.status(500).send({
          message: `Hubo un error al intentar consutlar los albumnes`,
        });
      });
  } else {
    find = await Album.find({ artist: artistId })
      .sort("year")
      .populate({ path: "artist" })
      .exec()
      .catch((err) => {
        res.status(500).send({
          message: `Hubo un error al intentar consutlar los albumnes`,
        });
      });
  }


  if (!find) {
    res.status(404).send({
      message: "No se enconrtaron los albumnes",
    });
  } else {
    res.status(200).send({
      albums: await find,
    });
  }
};
