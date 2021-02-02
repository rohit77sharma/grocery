const { addcategories }  = require("../../model/models");
const categorydelete = require("../../model/models");
const url = require("url");

exports.categorydelete = async(req ,res)=>{
    
    let urlParsed = url.parse(req.url, true);
    let urlQuerd = urlParsed.query;
    let id = urlQuerd.id;
    addcategories.findByIdAndRemove(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/categories");
        }
    });
}