import Express from 'express';
import Games from '../models/games.js';
import GamesController from '../controllers/games.controller.js';

const router = new Express();

router.get('/', async (req, res) => {
    try {
        const games = await new GamesController().getGames(req, res);
        res.status(200).send(JSON.stringify(games, null, 2));
    } catch (error) {
        res.status(503).send(`Сервер временно недоступен и не может отработать текущий запрос: ${error}`)
    }
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