import { Router } from 'express';
import UserService from '../services/UserService.js';
import NumberMiddleware from '../middlewares/number.middleware.js';
import UserMiddleware from '../middlewares/user.middleware.js';

const router = Router();

router.post('/create', async (req, res) => {
    const response = await UserService.createUser(req);
    res.code(response.code).message(response.message);
});

router.get(
    '/:id',
    [
        NumberMiddleware.isNumber,
        UserMiddleware.isValidUserById,
        UserMiddleware.hasPermissions
    ],
    async (req, res) => {
        const response = await UserService.getUserById(req.params.id);
        res.send(response.message);
    });

router.put('/:id',
    NumberMiddleware.isNumber,
    UserMiddleware.isValidUserById,
    UserMiddleware.hasPermissions, (req, res) => {
        // TODO: Implement this
    });

router.delete('/:id',
    NumberMiddleware.isNumber,
    UserMiddleware.isValidUserById,
    UserMiddleware.hasPermissions,
    (req, res) => {
    // TODO: Implement this
    });

export default router;