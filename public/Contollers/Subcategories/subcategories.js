const { addsubcategories } = require("../../model/models")
const subcategories = require("../../model/models")

exports.subcategories = async (req, res) => {
    addsubcategories.find({}, (err, result) => {
        if (result != null) {
            res.render('Subcategories/subcategories', { da: result });
        }
    })
}