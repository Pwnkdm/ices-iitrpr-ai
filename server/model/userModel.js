import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String,required:true},
    email: {type: String,required:true,unique:true},
    // countryCode: {type: String,required:true},
    phonenumber: {type: String,required:true,unique:true},
    collegeName: {type: String,required:true},
    collegeAddress: {type: String,required:true},
    city: {type: String,required:true},
    pincode: {type: String,required:true},
},{
    timestamps: true,
    versionKey: false 
})
const User = mongoose.model('User', userSchema)  



export default User