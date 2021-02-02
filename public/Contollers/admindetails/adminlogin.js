const adminlogin = require("../../model/models");
const { adminregister } = require("../../model/models");

exports.adminlogin = async(req , res)=>{
    try {
        const adminemail = req.body.adminemail;
        const adminpassword = req.body.adminpassword;
        adminregister.findOne({ adminemail: adminemail } , (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.adminemail == adminemail && result.adminpassword == adminpassword) {
                    res.redirect('/home')
                } else {
                    res.send("password is not matching");
                }
            }
        });
    } catch (error) {
        res.send("invalid  Email")
    }
}