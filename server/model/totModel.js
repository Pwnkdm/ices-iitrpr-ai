import mongoose from "mongoose";

const totSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ToT = mongoose.model("ToT", totSchema);

export default ToT;
