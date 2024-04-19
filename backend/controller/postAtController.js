import asyncHandler from '../middleware/asyncHandler.js'
import PostAt from '../models/postAtModel.js'
import Estate from '../models/estateModel.js';

// @des Post your ad
// @route POST /api/postat
// @access private

const registerPostAt = asyncHandler( async (req, res) => {
    const {
        firstName,
        lastName,
        type,
        saleOrRent,
        phoneNumber,
        message,
        email,
        city,
        image,
        price
    } = req.body;
   
    // const existPostAt = await PostAt.findOne({email});

    // if(existPostAt) {
    //     throw new Error("Same Data Already Exists");
    // }
    const postat = await Estate.create({
        firstName,
        lastName,
        userEmail: email,
        phoneNumber,
        description: message,
        type,
        saleOrRent,
        city,
        image,
        price,
    });
    if(postat){
        res.json({
            firstName: postat.firstName,
            lastName: postat.lastName,
            type: postat.type,
            email: postat.email,
            message: postat.message,
            phoneNumber: postat.phoneNumber,
            saleOrRent: postat.saleOrRent,
            city: postat.city,
            image: postat.image,
            price: postat.price
        });
    }else{
        res.status(400);
        throw new Error("Invalid Postat Data");
    }
});

export { registerPostAt };