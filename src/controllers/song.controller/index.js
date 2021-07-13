"use strict";

const deleteSong = require("./delete-song");
const getSong = require("./get-song");
const getSongs = require("./get-songs");
const getSongFile = require("./get-song-file");
const saveSong = require("./save-song");
const updateSong = require("./update-song");
const uploadSong = require("./upload-file-song");

module.exports = {
    deleteSong,
    getSong,
    getSongs,
    getSongFile,
    saveSong,
    updateSong,
    uploadSong,
};
