const { products } = require("../../model/models");
const producteditsubmit = require("../../model/models");
const url = require("url");
const submodel = require("../../model/models");
const fs = require('fs');
const path = require('path')
const Constant = require("../../../config");


exports.producteditsubmit = async (req, res) => {
    let urlParsed = url.parse(req.url, true);
    let urlQuerd = urlParsed.query;
    let id = urlQuerd.id;
    var img = fs.readFileSync(req.file.path);
    var encoded_imgage = img.toString('base64');

    console.log(id);
    var finalimg = {
        contentType: req.file.mimetype,
        path: req.file.path,
        image: new Buffer(encoded_imgage, 'base64')
    };
  
    let image_path = Constant.DOMAIN_NAME + req.file.path;

    const newu = {
        productname:req.body.productname,
        type :req.body.type,
        maincategory:req.body.maincategory,
        subcategory:req.body.subcategory,
        unit: req.body.unit,
        measurment:req.body.measurment,
        price:req.body.price,
        stock:req.body.stock,
        discountprice:req.body.discountprice,
        available:req.body.available,
        descrition:req.body.descrition,
        images: image_path
    };
    

    products.findByIdAndUpdate(id, newu, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/manageproducts');
        }

    })

}