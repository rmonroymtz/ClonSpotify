const User = require("../../models/user.model");
const bcrypt = require("bcrypt-nodejs");

module.exports = function saveUser(req, res) {
  const user = new User();

  const { name, surname, email, role, image, password } = req.body;

  user.name = name;
  user.surname = surname;
  user.email = email;
  user.role = role;
  user.image = image;

  if (password) {
    /**
     * Encrypt password and save data
     */
    bcrypt.hash(password, user.salt, null, (err, hash) => {
      user.password = hash;
      if (user.name !== null && user.surname !== null && user.email !== null) {
        /**
         * Save user
         */
        user.save((err, userStored) => {
          if (err) {
            res.status(500).send({
              message: "Error al guardar el usuario",
            });
          } else {
            if (!userStored) {
              res.status(404).send({
                message: "No se ha registrado el usuario",
              });
            } else {
              res.status(200).send({
                user: userStored,
              });
            }
          }
        });
      } else {
        res.status(200).send({
          message: "Hay datos faltantes en tu registro",
        });
      }
    });
  } else {
    res.status(200).send({
      message: "password is required",
    });
  }
};
