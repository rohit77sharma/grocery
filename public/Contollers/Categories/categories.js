const { addcategories } = require("../../model/models")
const categories = require("../../model/models")

exports.categories = async (req, res) => {
    addcategories.find({}, (err, result) => {
        if (result != null) {
            res.render('Categories/categories', { data: result });
        }
    })
}