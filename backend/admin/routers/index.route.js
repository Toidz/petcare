const router = require("express").Router()
const accountAdminRouter = require("./account-admin.route")
const categoryRouter = require("./category.route")
const petRouter = require("./pet.route")
const authMiddleware = require("../../middlewares/admin/auth.middleware")
router.use("/account",accountAdminRouter);
router.use("/category",authMiddleware.verifyToken,categoryRouter)
router.use("/pet",authMiddleware.verifyToken,petRouter)

module.exports = router
