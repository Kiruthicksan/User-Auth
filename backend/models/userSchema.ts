
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User name is required"],
        unique: true,
        trim: true,
        minlength: [3, "User name must be at least 3 characters long"],
        maxlength: [30, "User name must be at most 30 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: [6, "Password must be at least 6 characters long"]
    },
},{ timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
