const jwt = require("jsonwebtoken");
const AccountAdmin = require("../../admin/models/account-admin.model");

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.clearCookie("token");
      return res.json({
        code: "error",
        message: "Token không tồn tại hoặc đã hết hạn"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;
    const existAccount = await AccountAdmin.findOne({
      email:email,
      deleted:false
    }); 


    if (!existAccount) {
      res.clearCookie("token");
      return res.json({
        code: "error",
        message: "Tài khoản không hợp lệ!"
      });
    }

    req.account = existAccount;
    next();
  } catch (error) {
    res.clearCookie("token");
    return res.json({
      code: "error",
      message: "Token không hợp lệ"
    });
  }
};
