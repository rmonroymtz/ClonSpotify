const fs = require("fs");
const path = require("path");

module.exports = function getImage(req, res){
    const {imageFile} = req.params;
    const pathFile = `./src/uploads/users/${imageFile}`
    fs.exists(pathFile, (exists) => {
        if(exists){
            res.sendFile(path.resolve(pathFile))
        }else{
            res.status(200).send({
                message:'Image does not exist'
            })
        }
    })
}