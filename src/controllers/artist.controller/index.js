"use strict";

const deleteArtist = require("./delete-artist");
const getArtist = require("./get-artist");
const saveArtist = require("./save-artist");
const getAllArtist = require("./get-all-artist");
const updateArtist = require("./update-artist");
const uploadImage = require("./upload-image");
const getImage = require("./get-image");

module.exports = {
  deleteArtist,
  getImage,
  getAllArtist,
  getArtist,
  saveArtist,
  updateArtist,
  uploadImage,
};
