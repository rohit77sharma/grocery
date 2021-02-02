const unitsubmit = require("../../model/models");
exports.unitsubmit = async(req ,res)=>{
    if(!req.body.unitname || !req.body.unitcode){
    }
    else{
        const unit = new unitsubmit.unitsubmit({
            unitname:req.body.unitname,
            unitcode:req.body.unitcode,
        })
        unit.save((err ,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('/units')
            }

        })
    }

}