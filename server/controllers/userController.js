import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/register", async(req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password ) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ username, email, password });
        await user.save();
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

export default router
