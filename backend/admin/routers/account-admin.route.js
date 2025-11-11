const router = require("express").Router()
const accountAdminController = require("../controllers/account-admin.controller")
const authMiddleware = require("../../middlewares/admin/auth.middleware")
router.post("/login",accountAdminController.loginPost);
router.post("/register",accountAdminController.registerPost);
router.post("/forgot-password",accountAdminController.forgotPasswordPost);
router.post("/otp-password",accountAdminController.otpPasswordPost);
router.post("/reset-password",authMiddleware.verifyToken,accountAdminController.resetPasswordPost);
router.post("/logout",accountAdminController.logoutPost);
module.exports = router