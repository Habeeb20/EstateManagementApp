import bcrypt from "bcrypt";
import prisma from "../lib/Prisma.js";
import jwt from "jsonwebtoken";
export const register = async(req, res) => {
    try {
        const {username, email, password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)

        console.log(hashedPassword)

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password:hashedPassword,
            }
        });

        console.log(newUser)
        res.status(200).json({message: "successfully saved"})
            
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "an error occured" })
        
    }
}

export const login =async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {username}
        })
        if(!user) return res.status(401).json({message:"invalid credentials"})

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) return res.status(500).json({message: "its is ioncorrect"})

        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign({
            id: user.id}, process.env.jwt_secret_key, {expiresIn:age} )

       
        res.cookies("token", token, {
            httpOnly:true,
            secure:true,
            maxAge: age
        }).status(200).json({message: "login successful"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "failed to login"})
    }


}

export const logout = async(req, res) => {
    res.clearCookies("token").status(200).json({message:"Logout Successful"})
}