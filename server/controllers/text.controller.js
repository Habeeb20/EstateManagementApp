import jwt from "jsonwebtoken"
export const shouldBeLoggedIn = async(req, res)=> {
    const token= req.cookies.token

    if(!token) return res.status(401).json({message:"not authorized"});
    jwt.verify(token, process.env.jwt_secret_key, async(err, payload) => {
        if(err) return res.status(403).json({message:"token not valid"})
    })

    res.status(200).json({message: "you are Authentication "})
    
}

export const shouldBeAdmin = async(req, res) => {
    const token= req.cookies.token

    if(!token) return res.status(401).json({message:"not authorized"});
    jwt.verify(token, process.env.jwt_secret_key, async(err, payload) => {
        if(err) return res.status(403).json({message:"token not valid"})
        if(!payload.isAdmin){
            return res.status(403).json({message:"not authroized"})
        }
    })

    res.status(200).json({message: "you are Authentication "})
    

}