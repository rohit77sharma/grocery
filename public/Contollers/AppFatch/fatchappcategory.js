const { json } = require("body-parser");
const fatchappcategory = require("../../model/models");
const { addcategories }  = require("../../model/models");

exports.fatchappcategory = function(req ,res){
    addcategories.find({} , (function(err ,result){
        if(result != null){
            res.status(200).send(JSON.stringify(result))

        }
        else{
            res.status(400).send();
        }
    }))
}
