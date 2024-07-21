import { DataTypes, Model } from 'sequelize';
import db from './index.js';

class Member extends Model {};

const model = Member.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Game',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }, 
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'User',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }, 
        creator: {
            type: DataTypes.BOOLEAN,
            validate: {
                notEmpty: true
            }
        }
    }, 
    {
        sequelize: db,
        tableName: 'Member',
        timestamps: false
    }
);


export default model;