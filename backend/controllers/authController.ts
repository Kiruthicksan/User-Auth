import User from "../models/userSchema";
import { Request,Response } from "express";
import bcrypt from "bcrypt";

const RegisterUser = async (req: Request , res: Response) => {
    try {
        const {userName, email, password, phoneNumber} = req.body

    //  Check if user already exists

    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(400).json({message: "User already exist"})
    }

    // hashing

    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user

     const newuser = new User({
        userName,
        
    })

    await newUser.save();

    res.status(201).json({message: "User registered successfully"});

    } catch (error) {
        console.error('Error registering user:', error);
    }



   
}