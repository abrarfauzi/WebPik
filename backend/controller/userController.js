import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';

// @desc Auth User & get token
// @Route Post /api/users/login
// @Access Public
const authUser = asyncHandler(async (req, res) => {
    let sess = req.session;
    const {
        email,
        password
    } = req.body;
  

    const user = await User.findOne({
        email
    });
    
    // && ( await user.matchPassword(password)) 
   
    if (user && ( await user.matchPassword(password)) ) {

        generateToken(res, user._id);
        
        sess.userId = user._id;
        // console.log(sess);
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401);
        throw new Error(" Invalid email or password ")
    }
});

// @desc Register User
// @Route Post /api/users
// @Access Public
const registerUser = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber
    } = req.body;

    const userExist = await User.findOne({
        email
    });

    if (userExist) {
        res.status(400);
        throw new Error(" User Already Exists")
    }
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
    });

    if (user) {
        generateToken(res, user._id);
        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumer: user.phoneNumber,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400);
        throw new Error("Invalid User Data")
    }

});

// @desc Update User
// @Route PUT /api/users/:id
// @Access Private
const updateUserById = asyncHandler(async (req, res) => {
    res.send("UpdateUser")

});
// @desc LogOut $ clear user cookies
// @Route Post /api/users/logout
// @Access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    req.session.destroy();
    res.status(200).json({
        messaage: 'Logged Out Successfully'
    });
});

export {
    authUser,
    registerUser,
    updateUserById,
    logoutUser,
};