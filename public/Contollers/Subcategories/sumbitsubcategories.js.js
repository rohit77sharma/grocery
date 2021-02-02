const multer = require('multer');
const fs = require('fs');
const path = require('path');
const submodel = require("../../model/models");
const addsubcategories = require('../../model/models');
const Constant = require("../../../config");




exports.addsubcategories = async(req ,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encoded_imgage = img.toString('base64');
    var finalimg = {
        contentType: req.file.mimetype,
        path: req.file.path,
        image: new Buffer(encoded_imgage, 'base64')
    };
    let image_path = Constant.DOMAIN_NAME + req.file.path;
    let subcategory = submodel.addsubcategories({
        subcategoryname: req.body.subcategoryname,
        subsubtitle: req.body.subsubtitle,
        maincategory: req.body.maincategory,
        images: image_path
    });         
    subcategory.save((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/Subcategories')
        }
    });
}