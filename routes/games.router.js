import Express from 'express';
import Games from '../models/games.js';
import GamesController from '../controllers/games.controller.js';

const router = new Express();

router.get('/', async (req, res) => {
    // => get all list users
});

router.post('/', async (req, res) => {
    try {
        const newGame = await new GamesController().createGames(req, res);
        res.status(201).send(JSON.stringify(newGame, null, 2));
    } catch (error) {
        res.status(503).send(`Сервер временно недоступен и не может создать игру: ${error}`)
    }
});

export default router;