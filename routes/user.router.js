import Express from 'express';
import User from '../models/user.js';
import UserController from '../controllers/user.controller.js';


const router = new Express();

router.get('/', async (req, res) => {
    try {
        const users = await new UserController().getUsers(req, res);
        res.status(200).send(JSON.stringify(users, null, 2));
    } catch (error) {
        res.status(503).send(`Сервер временно недоступен и не может обработать текущий запрос: ${error}`)
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await new UserController().createUser(req, res);
        res.status(201).send(JSON.stringify(newUser, null, 2));
    } catch (error) {
        res.status(503).send(`Сервер временно недоступен и не может создать пользоватлея: ${error}`);
    }
})

export default router;