"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env["PORT"] || 3977;

mongoose.connect(
  "mongodb://localhost:27017/curso_mean2",
  { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log(`La conexión a la base de datos es éxitosa`);

      app.listen(PORT, () => {
        console.log(`API rest is running on http://localhost:${PORT}`);
      });
    }
  }
);
