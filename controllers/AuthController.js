import { Router } from 'express';
import AuthService from '../services/AuthService.js';
import AuthMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/login', AuthMiddleware.validateUserAndPass, async (req, res) => {
    const response = await AuthService.login(req.body.email, req.body.password);
    res.status(response.code).json(response.message);
});

router.post('/register', (req, res) => {
    // TODO: Implement this
});

router.post('/logout', (req, res) => {
    // TODO: Implement this
});
export default router;