const terms = require("../../../model/models");

exports.terms = async (req, res) => {
    if (!req.body.terms) {
    }
    else {
        const condition = new terms.terms({
            terms:req.body.terms
        })
        condition.save((err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.redirect('details')
            }

        })
    }
}