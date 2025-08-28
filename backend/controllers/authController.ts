import User from "../models/userSchema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET_KEY;

export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password, phoneNumber , role} = req.body;

    //  Check if user already exists

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    // hashing

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user

    const newuser = new User({
      userName,
      email,
      password: hashedPassword,
      phoneNumber,
      role
      
    });

    await newuser.save();

    if (!process.env.JWT_SECRET_KEY) {
      return res.status(500).json({ message: "Internal server error" });
    }

    const token = jwt.sign({ id: newuser._id, role: newuser.role }, jwtSecret!, { expiresIn: "1d" });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // check if user exist or not

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // check password

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT secret key is not defined in .env");
    }

    const token = jwt.sign({ id: existingUser._id, role: existingUser.role }, jwtSecret!, {
      expiresIn: "1d",

    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
