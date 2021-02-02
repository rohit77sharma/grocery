const privacy = require("../../../model/models");

exports.privacy = async(req ,res)=>{
    if(!req.body.privacypolicy){
    }
    else{
        const pri = new privacy.privacy({
            privacypolicy:req.body.privacypolicy
        })
        pri.save((err ,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('details')
            }
        })
    }
}