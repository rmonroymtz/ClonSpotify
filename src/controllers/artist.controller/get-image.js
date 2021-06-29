"use stric";
const fs = require("fs");
const path = require("path");

module.exports = function getImage(req, res) {
  const { imageFile } = req.params;
  const path_file = `./src/uploads/artist/${imageFile}`;

  fs.exists(path_file, (exists) => {
    if (exists) {
      res.sendFile(path.resolve(path_file));
    } else {
      res.status(200).send({
        message: "No existe ninguna imagen...",
      });
    }
  });
};
