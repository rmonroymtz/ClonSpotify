"use strict";

const mongoosePagination = require("mongoose-pagination");
const Artist = require("../../models/artist.model");
module.exports = function getAllArtist(req, res) {
  const page = req.params["page"] || 1;
  const itemsPerPage = 5;

  Artist.find()
    .sort("name")
    .paginate(page, itemsPerPage, (err, artists, total) => {
      if (err) {
        res.status(500).send({
          message: "Error en la petición",
        });
      } else {
          if(!artists){
              res.status(404).send({
                  message: "No existen artistas"
              })
          }else{
              return res.status(200).send({
                  total_items: total,
                  artist: artists,
              })
          }
      }
    });
};
