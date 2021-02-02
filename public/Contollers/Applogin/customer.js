const { customerregister } = require('../../model/models')
const customer = require('../../model/models')

exports.customer = (req, res) => {
    const newUser = new customer.customerregister({
        customername: req.body.customername,
        customeremail: req.body.customeremail,
        customermobile: req.body.customermobile,
        customerpassword: req.body.customerpassword
    })
    const query = { customeremail: newUser.customeremail }
    customerregister.findOne(query, (err, result) => {
        if (result == null) {
            customerregister.create(newUser, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).send();
                }
            })
        } else {
            res.status(400).send()
        }
    })
}
