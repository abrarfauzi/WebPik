import express from 'express';
import { addFavourites, getFavouriteId } from '../controller/favouriteController.js';

const router = express.Router();

router.route('/').post(addFavourites).get(getFavouriteId);


export default router;