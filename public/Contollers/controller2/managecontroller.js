const manageproducts = require("../../model/models")
const { products } = require("../../model/models");

exports.manageproducts = async(req  , res )=>{
    products.find({},(err , result)=>{
        if(result != null){
            res.render('Products/manageproducts', { data: result });
        }

    })

}