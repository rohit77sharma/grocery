const submitpromocode = require("../../model/models");
exports.submitpromocode = async(req ,res)=>{
    if(!req.body.promocode || !req.body.message || !req.body.startdate || !req.body.enddate || !req.body.noofusers || !req.body.miniorderamount || !req.body.promodiscount || !req.body.discounttype|| !req.body.maxdiscountprice|| !req.body.repeateuse|| !req.body.status ){
    }else{
        const promo = new submitpromocode.submitpromocode({
            promocode:req.body.promocode,
            message:req.body.message,
            startdate:req.body.startdate,
            enddate:req.body.enddate,
            noofusers:req.body.noofusers,
            miniorderamount:req.body.miniorderamount,
            promodiscount:req.body.promodiscount,
            discounttype:req.body.discounttype,
            maxdiscountprice:req.body.maxdiscountprice,
            repeateuse:req.body.repeateuse,
            status:req.body.status,
        })
        promo.save((err ,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('/promocode');
            }
           

        })
    }

}