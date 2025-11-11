const mongoose = require("mongoose")
slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const schema = new mongoose.Schema(
    {   
        name: String,
        category: String,
        date:Date,
        sex:String,
        color:String,
        quantity:Number,
        price:Number,
        position: Number,
        avatar: String,
        description: String,
        createdBy: String,
        updatedBy: String,
        slug: {   
            type: String, 
            slug: "name",
            unique: true
        },
        deleted:{
            type: Boolean,
            default: false
        },
        deletedBy: String,
        deletedAt: Date
    },
    {
        timestamps : true
    }
)
const Pet = mongoose.model("Pet",schema,"pets")
module.exports = Pet;