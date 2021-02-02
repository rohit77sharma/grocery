const subcategorydelete = require("../../model/models");
const { addsubcategories } = require("../../model/models");
const url = require("url");


exports.subcategorydelete = async (req, res) => {
    let urlParsed = url.parse(req.url, true);
    let urlquery = urlParsed.query;
    let id = urlquery.id;

    addsubcategories.findByIdAndRemove(id, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect("/subcategories");
        }
    })

}
