const { privacy } = require("../../../model/models");
const privacyfatch = require("../../../model/models");

exports.privacyfatch = async(req ,res)=>{
privacy.findOne({},(err ,result)=>{
    if(result!=null){
        const tosend = {
            privacypolicy: result.privacypolicy,
        } 
        res.status(200).send(JSON.stringify(tosend))
    }
    else{
        res.status(400).send();
    }
})
}