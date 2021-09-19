import { verify } from "jsonwebtoken";
import { secret } from "./jwt.config";

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(403).send("Access denied.");

        const decoded = verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send({ success: 0, message: "Invalid token" });
    }
};
