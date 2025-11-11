module.exports.mailHelper = (email,subject,content)=>{
    const nodemailer = require("nodemailer")
    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD
    },
    });

    (async () => {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_NAME,

        to: email,
        subject: subject,
        html: content
    });

    console.log("Message sent:", info.messageId);
    })();
}