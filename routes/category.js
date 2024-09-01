import express from "express";
import { default as Category } from "../models/Category.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} from "./verifyToken.js";

const router = express.Router();

// Create Category
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err); // Corrected response status
  }
});

// Update Category
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category[id]); // This will return an object
  } catch (err) {
    res.status(500).json(err);
  }
});
// Delete Category
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Category has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});


export default router;
