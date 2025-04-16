import Data from "../model/dataModel.js";
import ToT from "../model/totModel.js";
import User from "../model/userModel.js";

// @desc    Create new data
// @route   POST /api/data
// @access  Private/SuperAdmin
const createData = async (req, res) => {
  try {
    const { title, description } = req.body;

    const data = await Data.create({
      title,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all data
// @route   GET /api/data
// @access  Private/Admin & SuperAdmin
const getAllData = async (req, res) => {
  try {
    const users = await User.find({});
    const tots = await ToT.find({});
    res.status(200).json([...users, ...tots]);
    // .populate("createdBy", "name email");
    // res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get data by ID
// @route   GET /api/data/:id
// @access  Private/Admin & SuperAdmin
const getDataById = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update data
// @route   PUT /api/data/:id
// @access  Private/SuperAdmin
const updateData = async (req, res) => {
  try {
    const { title, description } = req.body;

    const data = await Data.findById(req.params.id);

    if (data) {
      data.title = title || data.title;
      data.description = description || data.description;

      const updatedData = await data.save();
      res.json(updatedData);
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete data
// @route   DELETE /api/data/:id
// @access  Private/SuperAdmin
const deleteData = async (req, res) => {
  try {
    const id = req.params.id;

    // Try to find the document in User collection
    let data = await User.findById(id);

    if (data) {
      await data.deleteOne();
      return res.json({ message: "User data removed" });
    }

    // If not found in User, try in Tot collection
    data = await ToT.findById(id);

    if (data) {
      await data.deleteOne();
      return res.json({ message: "Tot data removed" });
    }

    // If not found in either
    res.status(404).json({ message: "Data not found in any collection" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createData, getAllData, getDataById, updateData, deleteData };
