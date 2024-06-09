import Express from 'express';
import User from '../models/user.js';

const router = new Express();

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({ raw: true });
        res.status(200).send(JSON.stringify(users, null, 2));
    } catch (error) {
        res.status(503).send(`Сервер временно недоступен и не может обработать текущий запрос: ${error}`)
    }
})

export default router;