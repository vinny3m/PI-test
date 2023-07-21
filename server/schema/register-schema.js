import mongoose from "mongoose";

let Registeruser= new mongoose.Schema({
    username:{
        type : String,
        required :true,
    },
    email:{
        type : String,
        required:true,
        unique:true,
    },
    password:{
        type : String,
        required:true
    },
    confirmpassword:{
        type : String,
        required : true,
    }
})

const registerUser = mongoose.model("Registeruser", Registeruser)

export default registerUser;

