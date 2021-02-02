const { addcategories } = require("../../model/models");
const { addsubcategories } = require("../../model/models");
const { unitsubmit } = require("../../model/models");
const products = require("../../model/models");

exports.products = async (req, res) => {
    addcategories.find({}, (err, result) => {
        if (result != null) {

            addsubcategories.find({}, (err, result2) => {
                if (result != null) {

                    unitsubmit.find({}, (err, result3) => {
                        if (result != null) {

                            if (result != null) {
                                var info = {
                                    "category": result,
                                    "subcategory": result2,
                                    "units":result3
                                };
                                res.render('Products/addproducts', { data: info });
                            }
                        }
                    });
                }

            });


        }

    });




}