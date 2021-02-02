const { contactus } = require("../../../model/models");
const contactusfatch = require("../../../model/models");

exports.contactusfatch = async(req ,res)=>{
contactus.findOne({},(err ,result)=>{
    if(result!=null){
        const tosend = {
            contactus: result.contactus,
        } 
        res.status(200).send(JSON.stringify(tosend))
    }
    else{
        res.status(400).send();
    }
})
}