import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },

    cat: { type: String, required: true },

    img: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
