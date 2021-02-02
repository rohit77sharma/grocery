const deliveryboydetails = require("../../model/models");

exports.deliveryboydetails = async(req ,res)=>{
    if(!req.body.deliveryboyname || !req.body.deliveryboyaddress || !req.body.deliveryboymobile || !req.body.deliveryboyemail || !req.body.password || !req.body.deliveryboydate || !req.body.deliveryboysalery){

    }
    else{
        const deliveryboy = new deliveryboydetails.deliveryboydetails({
            deliveryboyname:req.body.deliveryboyname,
            deliveryboyaddress:req.body.deliveryboyaddress,
            deliveryboymobile:req.body.deliveryboymobile,
            deliveryboyemail:req.body.deliveryboyemail,
            password:req.body.password,
            deliveryboydate:req.body.deliveryboydate,
            deliveryboysalery:req.body.deliveryboysalery
        })
        deliveryboy.save((err ,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('managedelivery')
            }

        })

    }

}