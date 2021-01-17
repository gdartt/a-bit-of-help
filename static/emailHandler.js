let express = require("express");
var router = express.Router();
let nodemailer = require("nodemailer");
var cors = require("cors");
// NOTE: file containing email connection configuration
const creds = require("./config");

var transport = {
    host: creds.HOST,
    port: 587,
    secure: false,
    auth: {
        user: creds.USER,
        pass: creds.PASS,
    },
};

var transporter = nodemailer.createTransport(transport);
// NOTE: verifying the connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log(
            "Serwer śmiga jak dzik po żołędziach i chętnie wyśle jakiś mail!"
        );
    }
});

router.post("/access", (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var subject = req.body.emailTitle;

    var mail = {
        from: creds.EMAIL_FROM,
        to: creds.EMAIL_TO,
        subject: `${subject}: ${name}`,
        text: `Email: ${email} \nWiadomość: ${message}`,
    };

    // NOTE: server response
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: "fail",
            });
        } else {
            res.json({
                status: "success",
            });
        }
    });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
