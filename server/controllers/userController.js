const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');



//Registers a new user w/ POST /api/users
//Access Public
const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {      //Authenticates if the user has all fields filled
        res.status(400)
            throw new Error('Please add missing fields')
    }

    const userExists = await User.findOne({email})
    
    if(userExists) {                        //Checks to see if an existing user exists in DB
        res.status(400)
        throw new Error('User already exists!')
    }

    const salt = await bcrypt.genSalt(10)     // Hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: gensToken(user._id),
        })
    }   else {
        res.status(400)
        throw new Error('Invalid user data!')
    }
})


//Authenticates a user w POST /api/users/login
const loginUser = asyncHandler (async (req, res) => {
    const {email, password} = req.body

    //checks for email
    const user = await User.findOne({email})

    //checks user's hashed password
    if(user && (await bcrypt.compare(password, user.password))) {
        //sends back the user's data if they are registered

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: gensToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials!')
    }
})

//Gets user data w GET /api/users/me
//Access Private
const getMe = asyncHandler (async (req, res) => {
    res.status(200).json(req.user)
})

//Generates JWT
const gensToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
                                //^            ^                       ^
                  //payload       secret              expiration date


module.exports = {
    registerUser, loginUser, getMe,
}