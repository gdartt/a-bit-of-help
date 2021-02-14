const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const config = require("./config");

// NOTE: documentation: https://nodemailer.com/smtp/
const transport = {
    host: config.HOST,
    port: 587,
    secure: false,
    auth: {
        user: config.USER,
        pass: config.PASS,
    },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Serwer śmiga jak dzik po żołędziach!");
    }
});

router.post("/access", (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.emailTitle;

    const mail = {
        from: config.EMAIL_FROM,
        to: config.EMAIL_TO,
        subject: `${subject}:  ${name}`,
        text: `Email:  ${email} \nWiadomość:  ${message}`,
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.status(400).end();
        } else {
            res.end();
        }
    });
});

// NOTE: to run use: node emailHandler.js
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
