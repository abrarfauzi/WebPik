import asyncHandler from "../middleware/asyncHandler.js";
import Favourite from "../models/favouriteModel.js";


// @des Add fvourite image.
// route POST /api/favourites
// @access private
const addFavourites = asyncHandler(async(req, res) => {
    const {id, userId} = req.body;
 
    const existId = await Favourite.findOne({id, userId});
    
    if(existId){
        throw new Error("Same Image already exists");       
    }
    // console.log('gdgfd')
    // Favourite.create({id}).then((e) => {
    //     console.log(e)
    // })
    const favourite = await Favourite.create({id, userId});
    
    if(favourite){
        res.json({
            userId: favourite.userId,
            id: favourite.id
        })
    }else{
        res.status(400);
        throw new Error("Invalid Favourite data")
    };

});
// @des get Favourite Id.
// route GET /api/favourites
// @access private
const getFavouriteId = asyncHandler( async(req, res) => {
    let sess = req.session;
    const favo_ids = await Favourite.find({userId: sess.userId})
    
    // console.log(sess.userId);
    // console.log(favo_ids);
    if(favo_ids){
        res.status(200);
        res.json(favo_ids);
    }else{
        res.status(404);
        throw new Error("Data does not exist.")
    }
})

 export { 
    addFavourites,
    getFavouriteId,
 };