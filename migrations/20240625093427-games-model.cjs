'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Game', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      city: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            len: [1, 50], 
            notEmpty: true
        }
      },
      street: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            len: [1, 50], 
            notEmpty: true
        }
      }, 
      build: {
        type: Sequelize.DataTypes.INTEGER,
        validate: {
            min: 1
        }
      },
      comment: {
        type: Sequelize.DataTypes.TEXT,
        validate: {
            len: [0, 350]
        }
      },
      starttime: {
        type: Sequelize.DataTypes.DATE,
      },
      length: {
        type: Sequelize.DataTypes.INTEGER, 
        validate: {
            min: 1, 
            max: 6
        }
      },
      creatorId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Game');
  }
};
