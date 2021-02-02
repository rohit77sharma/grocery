const subcategoryedit  = require("../../model/models");
const { addsubcategories } = require("../../model/models");
const url = require("url");



exports.subcategoryedit = async(req ,res)=>{
    let urlParsed = url.parse(req.url, true);
    let urlQuerd = urlParsed.query;
    let id = urlQuerd.id;

    addsubcategories.findById(id, (err, result) => {
        if (result != null) {
            res.render('Subcategories/subcategoryedit',{data : result});
        }
    })

}