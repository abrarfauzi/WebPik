import express from 'express'
import { registerPostAt } from '../controller/postAtController.js'

const router = express.Router();

router.route('/').post(registerPostAt);

export default router;