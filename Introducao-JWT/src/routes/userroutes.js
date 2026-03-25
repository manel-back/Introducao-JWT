import express from 'express';
import { getAllUsers, createUser } from '../controllers/usercontroller.js';
import { authenticateToken } from '../middleware/authmiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getAllUsers);
router.post('/', createUser);

export default router;