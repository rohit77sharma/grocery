const subcategoryupdate = require("../../model/models");
const { addsubcategories } = require("../../model/models")
const url = require("url");
const submodel = require("../../model/models");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Constant = require("../../../config");


exports.subcategoryupdate = async (req, res) => {
    let urlParsed = url.parse(req.url, true);
    let urlQuerd = urlParsed.query;
    let id = urlQuerd.id;
    var img = fs.readFileSync(req.file.path);
    var encoded_imgage = img.toString('base64');
    var finalimg = {
        contentType: req.file.mimetype,
        path: req.file.path,
        image: new Buffer(encoded_imgage, 'base64')
    };
    let image_path = Constant.DOMAIN_NAME + req.file.path;

    const newu = {
        subcategoryname: req.body.subcategoryname,
        subsubtitle: req.body.subsubtitle,
        images : image_path,

    };


    addsubcategories.findByIdAndUpdate(id, newu, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect("/Subcategories");
        }

    })

}