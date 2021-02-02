const { terms } = require("../../../model/models");
const termsfatch = require("../../../model/models");

exports.termsfatch = async(req ,res)=>{
terms.findOne({},(err ,result)=>{
    if(result!=null){
        const tosend = {
            terms: result.terms,
        } 
        res.status(200).send(JSON.stringify(tosend))
    }
    else{
        res.status(400).send();
    }
})
}