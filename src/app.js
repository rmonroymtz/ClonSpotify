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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Allow-Control-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Allow", "GET, POST, PUT, DELETE, OPTIONS");
});
/**
 * routes
 */
app.use("/api", routes);

module.exports = app;
