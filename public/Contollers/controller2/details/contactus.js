const contactus = require('../../../model/models');

exports.contactus = async (req, res) => {
    if (!req.body.contactus) {
    }
    else{
        const contact = new  contactus.contactus({
            contactus:req.body.contactus
        })
        contact.save((err ,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('details')
            }
        })
    }
}