const mongoose = require('mongoose');
const express = require('express');
var schema = express.Router();
const adminregister = new mongoose.Schema({
    adminname: { type: String, required: true, maxlength: 100 },
    adminemail: { type: String, required: true, maxlength: 20, unique: true },
    adminmobile: { type: String, required: true, unique: true, maxlength: 10, minlength: 10 },
    adminpassword: { type: String, required: true, minlength: 5 },
})
const customer = new mongoose.Schema({
    customername: { type: String },
    customeremail: { type: String },
    customermobile: { type: Number },
    customerpassword: { type: String }
});
const addcategories = new mongoose.Schema({
    categorisename: { type: String },
    subtittle: { type: String },
    images: { type: String },
});
const addsubcategories = new mongoose.Schema({
    subcategoryname: { type: String  },
    subsubtitle: { type: String },
    maincategory: { type: String },
    images : { type:String}
});
const products = new mongoose.Schema({
    productname: { type: String },
    type: { type: String },
    maincategory: { type: String },
    subcategory: { type: String },
    unit: { type: String },
    measurment: { type: String },
    price: { type: String},
    stock: { type: String },
    discountprice: { type: String },
    available: { type: String},
    descrition: { type: String  },
    images:{ type: String},
});
const unitsubmit = new mongoose.Schema({
    unitname: { type: String, required: true },
    unitcode: { type: String, required: true }
});
const submitpromocode = new mongoose.Schema({
    promocode: { type: String, required: true },
    message: { type: String, required: true },
    startdate: { type: String, required: true },
    enddate: { type: String, required: true },
    noofusers: { type: String, required: true },
    miniorderamount: { type: String, required: true },
    promodiscount: { type: String, required: true },
    discounttype: { type: String, required: true },
    maxdiscountprice: { type: String, required: true },
    repeateuse: { type: String, required: true },
    status: { type: String, required: true },
});
const aboutus = new mongoose.Schema({
    aboutus: { type: String, required: true }
});
const contactus = new mongoose.Schema({
    contactus: { type: String, required: true }
});
const privacy = new mongoose.Schema({
    privacypolicy: { type: String, required: true }
});
const terms = new mongoose.Schema({
    terms: { type: String, required: true }
});
const deliveryboydetails = new mongoose.Schema({
    deliveryboyname: { type: String, required: true },
    deliveryboyaddress: { type: String, required: true },
    deliveryboymobile: { type: String, required: true },
    deliveryboyemail: { type: String, required: true },
    password: { type: String, required: true },
    deliveryboydate: { type: String, required: true },
    deliveryboysalery: { type: String, required: true },
});


var Exports = {
    "customer": customer,
    "addcategories": addcategories,
    "addsubcategories": addsubcategories,
    "products": products,
    "unitsubmit": unitsubmit,
    "submitpromocode": submitpromocode,
    "aboutus": aboutus,
    "contactus": contactus,
    "privacy": privacy,
    "terms": terms,
    "deliveryboydetails": deliveryboydetails,
    "adminregister": adminregister,
}
module.exports = Exports;