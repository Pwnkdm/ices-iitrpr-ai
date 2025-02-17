import express from 'express';

import User from '../model/userModel.js';


const router = express.Router();

// Test route for homepage
router.get('/getUsers', (req, res) => {
    const users = User.find();
    res.send({
        msg:"Data Fetched Successfully!",
        users
    });
});

// Sign-up route
router.post('/sign-up', async (req, res) => {
    try {
        const data = req.body;

        // Check if user already exists in the database
        const alreadyPresent = await User.findOne({ email: data.email });

        // If user already exists, send response and stop further execution
        if (alreadyPresent) {
            return res.status(400).json({
                msg: "User already exists"
            });
        }

        // Create a new user and save to the database
        const user = await User.create(req.body);

        // Send a success response with the created user
        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        console.error(error);
        // Send failure response with error details
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
});

export default router;