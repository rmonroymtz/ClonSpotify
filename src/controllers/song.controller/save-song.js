const Song = require("../../models/song.model");

module.exports = async function saveSong(req, res) {
  const song = new Song();

  const { number, name, duration, file, album } = req.body;

  song.number = number;
  song.name = name;
  song.duration = duration;
  song.file = file;
  song.album = album;

  const songStored = await song.save().catch((erro) => {
    res.status(500).send({
      message: "Internal error",
      error: erro,
    });
  });
  if (!songStored) {
    res.status(404).send({
      message: "No se ha guardado la canción",
    });
  } else {
    res.status(200).send({
      song: songStored,
    });
  }
};
