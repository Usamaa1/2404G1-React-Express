import nodemailer from "nodemailer";


export const mailSend = async (req, res) => {
    try {


        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: 'usamariaz@aptechnorth.edu.pk', // sender address
            to: req.body.email, // list of recipients
            subject: req.body.sub, // subject line
            text: req.body.message, // plain text body
            html: "<b>Hello world?</b>", // HTML body
        });

        console.log("Message sent: %s", info.messageId);

        res.send({
            message: "Email Sent!"
        })



    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error });
    }
}
