const Category = require("../models/category.model")
module.exports.createPost = async (req,res) =>{
    const existName = await Category.findOne({
        name:req.body.name
    })
    if(existName){
        res.json({
            code:"error",
            message:"Da ton tai"
        })
        return;
    }

    const data = new Category(req.body)
    await data.save()
    res.json({
        code:"success"
    })
}
module.exports.categoryName = async (req,res) =>{
    const arrayCategory = await Category.find({
        deleted:false
    })
    if(arrayCategory){
        res.json({
            code:"success",
            array:arrayCategory
        })
    }
}