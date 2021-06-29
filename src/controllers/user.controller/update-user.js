const User = require("../../models/user.model");

module.exports = function updateUser(req, res) {
  const { userId } = req.params;
  const update = req.body;

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) {
      res.status(500).send({
        message: "Error to update user",
      });
    } else {
      if (!userUpdated) {
        res
          .status(404)
          .send({ message: "No se ha podido actualizar el usuario" });
      } else {
        res.status(200).send({ message: "user updated", user: userUpdated });
      }
    }
  });
};
