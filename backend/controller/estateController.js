import asyncHandler from "../middleware/asyncHandler.js";
import Estate from "../models/estateModel.js";


// @desc Fetch all real estates images
// @Route Get /api/estates
// @Access Public
const getEstates = asyncHandler ( async (req, res) => {
    const estates = await Estate.find({});
    res.json(estates);
    // const estates = {name : "aaaaa"}
    // res.json(estates);

});

// @desc Fetch  real estates images by ID
// @Route Get /api/estates/:id
// @Access Public
const getEstateById = asyncHandler(async(req, res) => {
    const estate = await Estate.findById(req.params.id);
    if(estate){
        res.json(estate);
        
    }else{
        res.status(404);
        throw new Error("Resource Not Found");
    }
});
// @desc Fetch  real estates images by ID
// @Route POST /api/estates
// @Access Public
const getSearchByType = asyncHandler( async(req, res) => {
    const { buildType, city, saleOrRent } = req.body;
    console.log(req.body);
    const results = await Estate.find({
        type: buildType, city, saleOrRent
    });
    console.log(results)
    if(results){
        res.status(200);
        res.json(results);
    }else{
        throw new Error("Datas Not Exist");
    }
})

export {
    getEstates,
    getEstateById,
    getSearchByType,
};