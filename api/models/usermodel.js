import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    avatar : {
        type : String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    age:{
        type : Number,
        min : 10,
        default : 10
        
    },
    weight:{
        type : Number,
        min : 1,
        default : 1
        
    },
    height:{
        type : Number,
        min : 1,
        default : 1
        
    }
}, {timestamps : true})

const User = mongoose.model('User', userSchema);

export default User;