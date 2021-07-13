const Song = require("../../models/song.model");

module.exports = function deleteSong(req, res) {
  const { songId } = req.params;

  Song.findByIdAndRemove(songId, (err, songDeleted) => {
    if (err) {
      res.status(500).send({
        message: "Internal Error",
      });
    } else {
      if (!songDeleted) {
        res.status(404).send({
          message: "La canción no existe y no se ha eliminado",
        });
      } else {
        res.status(200).send({
          songDeleted,
        });
      }
    }
  });
};
