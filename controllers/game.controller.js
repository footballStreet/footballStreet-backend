import gamesModel from '../models/game.js';

class GamesController{
    async getGames(__req, __res) {
        const games = await gamesModel.findAll({raw: true});
        return games;
    };

    async createGames(req, __res) {
        const { city, street, build, comment, year, day, month, hour, minutes, length } = req.body;
        // const creatorId = req.params.id; After add session
        const creatorId = 1;
        const startTime = new Date(year, month - 1, day, hour + 3, minutes);
        const newGame = await gamesModel.create(
            { city, street, build, comment, starttime: startTime, length, creatorId }, 
            { fields: ['city', 'street', 'build', 'comment', 'starttime', 'length', 'creatorId'] }
        );
        return newGame;
    }
};

export default GamesController;