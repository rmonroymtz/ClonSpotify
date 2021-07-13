const Artist = require("../../models/artist.model");
const Album = require("../../models/album.model");
const Song = require("../../models/song.model");

module.exports = async function deleteArtist(req, res) {
  const { artistId } = req.params;

  const artistRemoved = await Artist.findByIdAndRemove(artistId).catch(
    (err) => {
      res.status(500).send({
        message: "Error al intentear eliminar el artista",
      });
    }
  );
  if (!artistRemoved) {
    res.status(404).send({
      message: "El artista no ha sido elimiado",
    });
  } else {
    const albumRemoved = await Album.find({ artist: artistRemoved._id })
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
          message: "Artista eliminado",
          aritest: artistRemoved,
        });
      }
    }
  }
};
