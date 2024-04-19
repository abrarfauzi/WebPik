import express from 'express'
import {
    authUser,
    registerUser,
    logoutUser,
    updateUserById
} from '../controller/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);

router.route('/:id').put(protect, admin, updateUserById);

router.route('/').post(registerUser);
router.route('/logout').post(logoutUser);

export default router;