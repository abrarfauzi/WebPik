import express from 'express';
import {
    getEstates,
    getEstateById,
    getSearchByType,
} from '../controller/estateController.js';

const router = express.Router();

router.route('/').get(getEstates).post(getSearchByType);

router.route('/:id').get(getEstateById);

export default router;