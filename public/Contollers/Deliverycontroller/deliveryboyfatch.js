const { deliveryboydetails } = require("../../model/models");
const deliveryboyfatch = require("../../model/models");

exports.deliveryboyfatch = async(req ,res)=>{
    deliveryboydetails.find({} , (err , result)=>{
        if(result != null){
            res.render('Delivery/managedelivery' , {data :result});
        }

    })

}
