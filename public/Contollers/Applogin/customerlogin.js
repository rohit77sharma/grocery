const { customerregister } = require("../../model/models")
const customerlogin = require("../../model/models")

exports.customer = (req ,res)=>{
    const query = {
        customeremail:req.body.customeremail,
        customerpassword: req.body.customerpassword
    }

    customerregister.findOne( query ,(err ,result)=>{
        if(result!=null){
            const tosend = {
                customername: result.customername,
                customeremail: result.customeremail,
                customermobile : result.customermobile
            }
            res.status(200).send(JSON.stringify(tosend))

        }
        else{
            res.status(400).send();
        }


    })


}