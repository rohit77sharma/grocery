const { customerregister } = require("../model/models")
const customerdetails = require("../model/models")

exports.customerdetails = async (req, res) => {
    customerregister.find({}, (err, result) => {
        if (result != null) {
            res.render('Customers/customers', { data: result });
        }
    })
}