const categoryedit = require("../../model/models");
const { addcategories } = require("../../model/models")
const url = require("url");



exports.categoryedit = async (req, res) => {
    let urlParsed = url.parse(req.url, true);
    let urlQuerd = urlParsed.query;
    let id = urlQuerd.id;

    addcategories.findById(id, (err, result) => {
        if (result != null) {
            res.render('Categories/categoryedit', { data: result });
        }
    })

}