import prisma from "../lib/Prisma.js";
import bcrypt from "bcrypt"
export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "failed to get"})
        
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await prisma.user.findUnique({
            where:{ id }
        })
    } catch (error) {
        
    }

}

export const UpdateUsers = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const {password, avatar, ...input } = req.body;
    if(id !== tokenUserId ){
        return res.status(403).json({message: "not authorized"})
    }
    let updatedPassword = null
    try {
        if(password){
            updatedPassword = await bcrypt.hash(password, 10)
        }


        const updatedUser = await prisma.user.update({
            where:{id},
            data: {
                ...input,
                ...(updatedPassword && {password: updatedPassword}),
                ...(avatar && {avatar})
            }
        });

        res.status(200).json({updatedUser});
       
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "failed to get"})
        
    }
}

export const deleteUsers = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    
    if(id !== tokenUserId ){
        return res.status(403).json({message: "not authorized"})
    }
    try {
        await prisma.user.delete({
            where:id
        })
        res.status(200).json({message: "user deleted"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "failed to get"})
        
    }
}