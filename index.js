import express from 'express';
import bodyParser from 'body-parser';
import UserController from './controllers/UserController.js';
import AuthController from './controllers/AuthController.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/v1/users', UserController);
app.use('/api/v1/auth', AuthController);

app.listen(3000, ()  => {
    console.log('Server is running on port 3000');
});
