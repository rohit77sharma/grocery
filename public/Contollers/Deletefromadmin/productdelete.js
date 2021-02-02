const { products }  = require("../../model/models");
const productdelete = require("../../model/models");
const url = require("url");

exports.productdelete = async(req ,res)=>{
    
    let urlParsed = url.parse(req.url, true);
    let urlQuerd = urlParsed.query;
    let id = urlQuerd.id;
    products.findByIdAndRemove(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/manageproducts");
        }
    });
}