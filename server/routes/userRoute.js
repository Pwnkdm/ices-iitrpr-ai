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

        // Ensure phone number is formatted correctly (remove non-numeric characters)
        let result = {
            ...data,
            phonenumber: data.countryCode + data.phonenumber.replace(/\D/g, '')  // Remove non-numeric characters
        };

        console.log(result, "res");

        // Check if user already exists in the database by either email or phoneNumber
        const alreadyPresent = await User.findOne({
            $or: [
                { email: data.email },
                { phonenumber: result.phonenumber }
            ]
        });

        console.log(alreadyPresent, "saasd");

        // If user already exists, send response and stop further execution
        if (alreadyPresent) {
            return res.status(400).json({
                message: "User already Registered!"
            });
        }

        // Create a new user and save to the database
        console.log(result,"resu");
        
        const user = await User.create(result);

        // Send a success response with the created user
        res.status(201).json({
            message: 'User created successfully!',
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