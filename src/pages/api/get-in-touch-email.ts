import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { functions, responses } from "../../../commons";

export default nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error("onError(/get-in-touch-email):", err.stack);
        res.status(500).end(responses.internalError);
    },
    onNoMatch: (req, res) => {
        res.status(404).end(responses.notFound);
    }
})
.post(async (req, res) => {
    const { name,email,phone,message,whatsapp } = JSON.parse(req.body)
    if (!name || !email || ! phone || !message) {
        res.status(400).end(functions.createSingleResponse("Some_Required_Fields_not_Found"))
    } else {
        try {
            await functions.sendGetInTouchEmail(name,email,phone,message,!!whatsapp)
            res.end(responses.ok)
        } catch (error) {
            res.status(500).end(responses.internalError);
        }
    }
})