const mongoose = require('mongoose');
//var validator = require("email-validator");

var toySchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    price:{
        type:String
    },
    amount:{
        type:String
    },
    description:{
        type:String
    }
})

// custom validation for email

// toySchema.path('email').validate((val) => {
//     return validator.validate(val);
// },'Invalid Email');

mongoose.model('Toy',toySchema);