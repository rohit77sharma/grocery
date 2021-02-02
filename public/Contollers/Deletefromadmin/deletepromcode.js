const {submitpromocode} = require("../../model/models");
const deletepromcode = require("../../model/models");
const url = require("url");
exports.deletepromcode = async(req ,res)=>{
    let urlParsed = url.parse(req.url, true);
    let urlquery = urlParsed.query;
    let id = urlquery.id;

    submitpromocode.findByIdAndRemove(id,(err ,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.redirect('/promocode');
        }

    })

}