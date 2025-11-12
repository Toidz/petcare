const router = require("express").Router()
const petController = require("../controllers/pet.controller")
router.post("/create",petController.createPost);
router.patch("/edit/:id",petController.editPatch) 

module.exports = router
