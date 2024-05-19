import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token= req.cookies.token

    if(!token) return res.status(401).json({message:"not authorized"});
    jwt.verify(token, process.env.jwt_secret_key, async(err, payload) => {
        if(err) return res.status(403).json({message:"token not valid"});

        req.userId = payload.id;
        next();
    })



}