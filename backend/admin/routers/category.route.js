const router = require("express").Router()
const categoryController = require("../controllers/category.controller")
router.post("/create",categoryController.createPost);
router.get("/get",categoryController.categoryName);
module.exports = router