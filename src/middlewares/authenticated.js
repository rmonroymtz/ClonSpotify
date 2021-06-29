"use strict";

const jwt = require("jwt-simple");
const moment = require("moment");
const secret = process.env["SECRET"] || "clave_secreta_del_curso";

exports.ensureAuth = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: "Sin autorización",
    });
  }

  const token = req.headers.authorization.replace(/["']+/g, "");
  let payload;
  try {
    payload = jwt.decode(token, secret);
    if (payload.ext <= moment().unix()) {
      return res.status(401).send({ message: "Expired token" });
    }
  } catch (error) {
    console.error(error);
    res.status(404).send({
      message: "Invalid token",
    });
  }
  req.user = payload;
  
  next();
};
