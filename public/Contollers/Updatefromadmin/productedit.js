const productedit = require("../../model/models");
const { products } = require("../../model/models")
const url = require("url");



exports.productedit = async(req, res) => {
    let urlParsed = url.parse(req.url, true);
    let urlQuerd = urlParsed.query;
    let id = urlQuerd.id;

    products.findById(id, (err, result) => {
        if (result != null) {
            res.render('Products/productedit', { data: result });
        }
    })

}