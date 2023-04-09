import { v4 } from "uuid";
import nodemailer from "nodemailer"
import path from "path";
const fs = require('fs')
const _ = require("lodash");

const getInTouchEmail = fs.readFileSync(path.resolve("src", "assets", "emails", "get-in-touch.email.html"), { encoding: "utf-8" });

function hasSingleValue(object) {
    return _.isNumber(object) || (_.isString(object) && !_.isEmpty(object));
}
function replaceAll(str, find, replaceWith) {
    return str.split(find).join(replaceWith);
}

async function sendEmail(subject, html, to = process.env.EMAIL_FROM, from = process.env.EMAIL_FROM, smtpUrl = process.env.SMTP_URL) {
    if (!hasSingleValue(to) ||
        !hasSingleValue(subject) ||
        !hasSingleValue(html)) {
        throw new Error("Required_Params_Not_Found");
    } else {
        const mailOptions = { from, to, subject, html };
        const transporter = nodemailer.createTransport(smtpUrl);
        await transporter.sendMail(mailOptions);
        return true
    }
}

const functions = {
    createId() {
        return v4()
    },
    createSingleResponse(message: string) {
        return JSON.stringify({ message })
    },
    deleteFile(path: string) {
        try {
            fs.unlinkSync(path)
        } catch (e) {
            console.error(`deleteFile(${path})`, e)
        }
    },
    sendGetInTouchEmail(name: string, email: string, phone: string, message: string, whatsapp: boolean) {
        let emailHtml = getInTouchEmail;
        emailHtml = replaceAll(emailHtml, "-1-name-9-", name ?? "-");
        emailHtml = replaceAll(emailHtml, "-1-phone-9-", phone ?? "-");
        emailHtml = replaceAll(emailHtml, "-1-email-9-", email ?? "-");
        emailHtml = replaceAll(emailHtml, "-1-message-9-", message ?? "-");
        emailHtml = replaceAll(emailHtml, "-1-whatsapp-9-", whatsapp ? "Yes" : "No");
        return sendEmail("New Get In Touch Message", emailHtml)
    },
    sendEmail,
    hasSingleValue,
    replaceAll,
}
export default functions