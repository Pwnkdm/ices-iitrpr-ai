import express from "express";
import ToT from "../model/totModel.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const data = req.body;

    const alreadyPresent = await ToT.findOne({
      $or: [{ email: data.email }, { phonenumber: data.phonenumber }],
    });

    if (alreadyPresent) {
      return res.status(400).json({
        message: "User already Registered!",
      });
    }

    const totUser = await ToT.create(data);

    res.status(201).json({
      message: "Tot User created successfully!",
      totUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating Tot user",
      error: error.message,
    });
  }
});

export default router;
