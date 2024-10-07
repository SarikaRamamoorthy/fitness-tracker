import bcryptjs from "bcryptjs";
import User from "../models/usermodel.js";
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const userEmailExists = await User.findOne({email});
    if(userEmailExists) return next(errorHandler(404, 'Email ID already exists!'));
    const userNameExists = await User.findOne({username});
    if(userNameExists) return next(errorHandler(404, 'User Name already exists!'));
    const newUser = new User({username, email, password : hashedPassword});
    try {
        await newUser.save();
        res.status(201).json('User created successfully');
    } catch (error) {
        next(error)
        // the next() calls the middleware in index.js
    }
}

export { signup }