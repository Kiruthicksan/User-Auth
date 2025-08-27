import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

export const protect = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];

    if (!JWT_SECRET) {
        return res.status(500).json({ message: "JWT secret not configured" });
    }

    try {
        const decoded = jwt.verify(token!, JWT_SECRET) as {id: string, role: string};
        (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};