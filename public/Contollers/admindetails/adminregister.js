const adminregister = require("../../model/models");
exports.adminregister = async(req ,res)=>{
    if(!req.body.adminname || !req.body.adminemail || !req.body.adminmobile || !req.body.adminpassword || !req.body.adminpassword2){
        res.send('Please Fill Details');
    }
    else if(req.body.adminpassword.length <5){
        res.send("Password is sort")
    }
    else if(req.body.adminpassword == req.body.adminpassword2){
        const admin = new adminregister.adminregister({
            adminname: req.body.adminname,
            adminemail: req.body.adminemail,
            adminmobile: req.body.adminmobile,
            adminpassword: req.body.adminpassword
        })
        admin.save((err ,result)=>{
            if(err){
                // res.send('Invalid Email address');
                console.log(err)
            }
            else{
                res.redirect('/home');
            }

        })
    }
    

}