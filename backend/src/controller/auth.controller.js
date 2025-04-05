import { User } from "../models/user.modal"

export const authCallback = async (req , res) => {
    try{
        const { id, firstName, lastName , imageUrl } = req.body;

        //check if user already exists
        const user =await User.findOne({ clerkId: id});
        if(!user){
            //signup
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl
            })
        }
        res.status(200).json({
            succes: true
        })
    }catch(error){
        console.log("error in auth callback ", error);
        res.status(500).json({
            message: "internal server error",error
        })
    }
}