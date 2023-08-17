import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import nextConnect from 'next-connect';
import { responses } from "../../../commons";
var path = require('path');

export default nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error("onError(/uploads):", err.stack);
        res.status(500).end(responses.internalError);
    },
    onNoMatch: (req, res) => {
        res.status(404).end(responses.notFound);
    }
})
    .get((req, res) => {
        // @ts-ignore
        const path: string = req.query.path
        if (fs.existsSync(path)) {
            const readStream = fs.createReadStream(path);
            readStream.pipe(res);
        } else {
            res.status(404).end(responses.notFound);
        }
    })
