const User = require("../../models/user.model");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("../../services/jwt");

module.exports = function loginUser(req, res) {
  const { email, password, getHash } = req.body;
  User.findOne({ email: email?.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500).send({
        message: "Error en la petición",
      });
    } else {
      if (!user) {
        res.status(404).send({ message: "El usuario no existe" });
      }else{
          /**
           * Check password
           */
          bcrypt.compare(password, user.password, (err, check) => {
            if(check){
                /**
                 * Return data user
                 */
                if(getHash){
                    /**
                     * Return's JWT Token
                     */
                    res.status(200).send({
                        token:  jwt.createToken(user)
                    })

                }else{
                    res.status(200).send({user});
                }
            }else{
                res.status(401).send({
                    message:'El usuario no ha podido identificarse'
                })
            }
          })
      }
    }
  });
};
