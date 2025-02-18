import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String,required:true},
    email: {type: String,required:true,unique:true},
    phonenumber: {type: String,required:true,unique:true},
},{
    timestamps: true,
    versionKey: false 
})
const User = mongoose.model('User', userSchema)  



export default User