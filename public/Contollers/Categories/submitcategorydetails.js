const multer = require('multer');
const fs = require('fs');
const path = require('path');
const submodel = require("../../model/models");
const Constant = require("../../../config");


exports.Upload = (req, res) => {
    var img = fs.readFileSync(req.file.path);
    var encoded_imgage = img.toString('base64');
    var finalimg = {
        contentType: req.file.mimetype,
        path: req.file.path,
        image: new Buffer(encoded_imgage, 'base64')
    };

    let image_path = Constant.DOMAIN_NAME + req.file.path

    let category = submodel.addcategories({
        categorisename: req.body.categoryname,
        subtittle: req.body.subtitle,
        images: image_path,
    });         
    category.save((err2, result2) => {
        if (err2) {
            console.log(err2);
        } else {
            res.redirect('/Categories')
        }
    });
}
