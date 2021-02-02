const submitproducts = require("../../model/models");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const submodel = require("../../model/models");
const Constant = require("../../../config");

exports.submitproducts = async (req, res) => {
    var img = fs.readFileSync(req.file.path);
    var encoded_imgage = img.toString('base64');
    var finalimg = {
        contentType: req.file.mimetype,
        path: req.file.path,
        image: new Buffer(encoded_imgage, 'base64')
    };
    let image_path = Constant.DOMAIN_NAME + req.file.path

        const pa = new submitproducts.products({
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
        })
        pa.save((err, result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('/addproduct');
            }

        })
    }
