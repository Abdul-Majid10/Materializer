import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    approved: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false }, // other user Type can be 'user' or 'admin'
    gender: String,
    firstName: String,
    lastName: String,
    mobile: Number,
    address: String,
    profile: String,
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
