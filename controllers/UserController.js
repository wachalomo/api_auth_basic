import { Router } from 'express';
import UserService from '../services/UserService.js';

const router = Router();

router.post('/create', async (req, res) => {
    const response = await UserService.createUser(req);
    res.code(response.code).message(response.message);
});

router.get('/:id', (req, res) => {
    // TODO: Implement this
});

router.put('/:id', (req, res) => {
    // TODO: Implement this
});

router.delete('/:id', (req, res) => {
   // TODO: Implement this
});

export default router;