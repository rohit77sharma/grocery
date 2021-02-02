const { aboutus } = require("../../../model/models");
const aboutusfatch = require("../../../model/models");

exports.aboutusfatch = async(req ,res)=>{
aboutus.findOne({},(err ,result)=>{
    if(result!=null){
        const tosend = {
            aboutus: result.aboutus,
        } 
        res.status(200).send(JSON.stringify(tosend))
    }
    else{
        res.status(400).send();
    }
})
}