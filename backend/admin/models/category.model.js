const mongoose = require("mongoose")
slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const schema = new mongoose.Schema(
    {   
        name: String,
        parent: String,
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
const Category = mongoose.model("Category",schema,"category")
module.exports = Category;