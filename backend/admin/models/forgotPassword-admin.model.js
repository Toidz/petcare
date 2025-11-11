const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    email:String,
    otp:String,
    expireAt:{
        type:Date,
        expires:0
    }
    },{
        timestamps:true
    }
)
const ForgotPasswordAdmin = mongoose.model("forgotPassword-admin",schema,"forgotPassword-admin")
module.exports = ForgotPasswordAdmin   
       
