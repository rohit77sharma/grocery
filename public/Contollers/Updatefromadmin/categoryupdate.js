const categoryupdate = require("../../model/models");
const { addcategories } = require("../../model/models");
const submodel = require("../../model/models");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const url = require("url");
const Constant  = require("../../../config");

exports.categoryupdate = async (req, res) => {
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

let image_path = Constant.DOMAIN_NAME + req.file.path

    const newu = {
        categorisename: req.body.categoryname,
        subtittle: req.body.subtitle,
        images : image_path,
    };
  addcategories.findByIdAndUpdate(id, newu, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect("/Categories");
        }

    })

   

    // submodel.addcategories.findByIdAndUpdate(id,finalimg, (err, result) => {
    //     if (err) return console.log(err);
    //     let category = submodel.addcategories({
    //         categorisename: req.body.categoryname,
    //         subtittle: req.body.subtitle,
    //         images: req.file.path
    //     });

    //     category.save((err2, result2) => {
    //         if (err2) {
    //             console.log(err2);
    //         } else {
    //             res.redirect('/Categories')
    //         }
    //     });
    // })
}



    // const newu = {
    //     categorisename: req.body.categoryname,
    //     subtittle: req.body.subtitle

    // };


    // addcategories.findByIdAndUpdate(id, newu, (err, result) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         res.redirect("/Categories");
    //     }

    // })

