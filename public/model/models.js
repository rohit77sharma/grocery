const mongoose = require('mongoose');
const schema = require('../schema/schema');

const adminregister = new mongoose.model('AdminRegistration' , schema.adminregister);
const customerregister = new mongoose.model('UserRegistration', schema.customer);
const addcategories = new mongoose.model('Categorise', schema.addcategories);
const addsubcategories = new mongoose.model('Subcategories', schema.addsubcategories);
const products = new mongoose.model('Products', schema.products);
const unitsubmit = new mongoose.model('Units', schema.unitsubmit);
const submitpromocode = new mongoose.model('Promocode', schema.submitpromocode);
const aboutus = new mongoose.model('Aboutus', schema.aboutus);
const contactus = new mongoose.model('Contactus', schema.contactus)
const privacy = new mongoose.model('Privacy', schema.privacy);
const terms = new mongoose.model('Terms', schema.terms);
const deliveryboydetails = new mongoose.model('DeliveryBoy' , schema.deliveryboydetails);


var Exports = {
    "customerregister": customerregister,
    "addcategories": addcategories,
    "addsubcategories": addsubcategories,
    "products": products,
    "unitsubmit": unitsubmit,
    "submitpromocode": submitpromocode,
    "aboutus": aboutus,
    "contactus": contactus,
    "privacy": privacy,
    "terms": terms,
    "deliveryboydetails":deliveryboydetails,
    "adminregister":adminregister,
}

module.exports = Exports;
