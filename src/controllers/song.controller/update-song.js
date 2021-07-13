const Song = require("../../models/song.model");

module.exports = async function updateSong(req, res) {
  const { songId } = req.params;
  console.log(songId);
  const songUpdate = await Song.findOneAndUpdate(songId, req.body).catch(
    (error) => {
      res.status(500).send({
        message: "Server error",
        error,
      });
    }
  );
  console.log(songUpdate);
  if (!songUpdate) {
    res.status(404).send({
      message: "No se han guardado los cambios porque la canción no existe",
    });
  } else {
    res.status(200).send({
      songUpdate,
    });
  }
};
