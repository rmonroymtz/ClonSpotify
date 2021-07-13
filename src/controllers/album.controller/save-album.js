"use stric";

const Album = require("../../models/album.model");

module.exports = async function saveAlbum(req, res) {
  const { title, description, year, image, artist } = req.body;
  const album = new Album();
  album.title = title;
  album.description = description;
  album.year = parseInt(year);
  album.image = image;
  album.artist = artist;

  const albumStored = await album.save().catch((err) => {
    res.status(500).send({
      message: "Error interno al intentar guardar el album",
    });
  });
  
  if (!albumStored) {
    res.status(404).send({
      message: "No se pudo guardar el album",
    });
  } else {
    res.status(200).send({
      album: albumStored,
    });
  }
};
