import { User } from "../models/user.model";
import httpStatus from "http-status"
import bcrypt, {hashash} from "bcrypt"

const register = async (req, res) => {
    try{
        const {name, username, password} = req.body;
        const existingUser = await User.find({username});
        if(!name || !username || !password){
            return res.status(httpStatus.BAD_REQUEST).json({
          
                message: "All fields are required"
            })
        }
        if(existingUser){
            return res.status(httpStatus.FOUND).json({
            
                message: "User already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: name, 
            username: username,
            password: hashedPassword
        })

        await newUser.save();
        res.status(httpStatus.CREATED).json({
  
            message:"User Created!"
        })
    }

}