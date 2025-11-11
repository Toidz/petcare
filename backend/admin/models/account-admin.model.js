const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    position:String,
    status:String,
    phone:String,
    avatar:String,
    role:String,
    createdBy:String,
    updatedBy:String,
    deletedBy:String,
    deletedAt:Date,
    deleted:{
        type:Boolean,
        default:false
    }   
    }
    ,
    {
        timestamps:true
    }
)
const AccountAdmin = mongoose.model("account-admin",schema,"account-admin")
module.exports = AccountAdmin