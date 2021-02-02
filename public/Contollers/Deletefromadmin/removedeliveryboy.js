const {deliveryboydetails} = require("../../model/models");
const removedeliveryboy =  require("../../model/models");
const url = require("url");

exports.removedeliveryboy  =async(req ,res)=>{
    let urlParsed = url.parse(req.url , true);
    let urlquery = urlParsed.query;
    let id = urlquery.id;


    deliveryboydetails.findByIdAndRemove(id, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/managedelivery");
        }
    })



}