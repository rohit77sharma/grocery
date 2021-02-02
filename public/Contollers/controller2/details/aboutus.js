
const aboutus = require("../../../model/models")


exports.aboutus= async(req ,res)=>{
    if(!req.body.aboutus){
    }else{
        const about = new aboutus.aboutus({
            aboutus:req.body.aboutus
        })
        about.save((err , result)=>{

            if(err){
                console.log(err)
            }
            else{
                res.redirect('details')
            }
        })
    }
}