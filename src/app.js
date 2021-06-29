"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/**
 * Load routes
 */
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Config headers http
 */

/**
 * routes
 */
app.use("/api", routes);

module.exports = app;
