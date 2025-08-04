const asyncHandler = require("express-async-handler");
const { createUserDB, getUserByEmailDB, checkEmailExists } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All feilds are mandatory!");
    }
    const userAvailable = await checkEmailExists(email);
    if(userAvailable) {
        res.status(400);
        throw new Error("Email already exists!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUserDB(username, email, hashedPassword);
    res.json(newUser);
})


const loginUser = asyncHandler(async (req, res) => {
    const{ email, password } = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All feilds are mandatory!");
    }
    const user = await getUserByEmailDB(email);
    if(user && (await bcrypt.compare(password, user.password))) {
        const accesstoken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15m"}
        );
        res.status(200).json({ accesstoken });
    } else {
        res.status(401);
        throw new Error ("email or password is invalid!");
    }
})

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
})

module.exports = {registerUser, loginUser, currentUser}