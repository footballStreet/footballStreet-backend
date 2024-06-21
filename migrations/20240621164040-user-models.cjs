'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
       },
       username: {
        type: Sequelize.DataTypes.TEXT,
        unique: true,
        validate: {
            len: [6, 25],
            notEmpty: true,
        }
       },
       firstname: {
        type: Sequelize.DataTypes.TEXT,
        validate: {
            len: [1, 25],
            notEmpty: true
        }
       },
       lastname: {
        type: Sequelize.DataTypes.TEXT,
        validate: {
            len: [1, 25],
            notEmpty: true
        }
       },
       surname: {
        type: Sequelize.DataTypes.TEXT,
        validate: {
            len: [1, 25],
            notEmpty: true
        }
       },
       birthday: {
        type: Sequelize.DataTypes.DATEONLY,
        validate: {
            notEmpty: true
        }
       },
       phone: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            is: /^\+[0-9]{11}$/,
            notEmpty: true
        }
       },
       email: {
        type: Sequelize.DataTypes.TEXT,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
       },
       password: {
        type: Sequelize.DataTypes.TEXT,
        validate: {
            notEmpty: true,
        }
       }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};

