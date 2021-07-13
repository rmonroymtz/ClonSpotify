"use strict";
const deleteAlbum = require("./delete-album");
const getAlbum = require("./get-album");
const getAll = require("./get-all");
const getImage = require("./get-image");
const saveAlbum = require("./save-album");
const updateAlbum = require("./update-album");
const uploadImage = require("./upload-image");

module.exports = {
  deleteAlbum,
  getAlbum,
  getAll,
  getImage,
  saveAlbum,
  updateAlbum,
  uploadImage,
};
