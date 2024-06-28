import gamesModel from '../models/game.js';

class GamesController{
    async getGames(__req, __res) {
        const games = await gamesModel.findAll({raw: true});
        return games;
    };

    async createGames(req, __res) {
        const { city, street, build, comment, year, day, month, hour, minutes, length } = req.body;
        // const userId = req.params.id; After add session
        const userId = 1;
        const startTime = new Date(year, month - 1, day, hour + 3, minutes);
        const newGame = await gamesModel.create(
            { city, street, build, comment, starttime: startTime, length, userId }, 
            { fields: ['city', 'street', 'build', 'comment', 'starttime', 'length', 'userId'] }
        );
        return newGame;
    }
};

export default GamesController;