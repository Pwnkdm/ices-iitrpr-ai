import mongoose from "mongoose";

const totSchema = new mongoose.Schema(
  {
    username: {type: String,required:true},
    email: {type: String,required:true,unique:true},
    phonenumber: {type: String,required:true,unique:true},
    collegeName: {type: String,required:true},
    collegeAddress: {type: String,required:true},
    city: {type: String,required:true},
    pincode: {type: String,required:true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ToT = mongoose.model("ToT", totSchema);

export default ToT;
