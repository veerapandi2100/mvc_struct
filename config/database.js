
const config = require('./env');
const {Sequelize} = require('sequelize');

var sequelize = new Sequelize(config.database, config.user, '', {host:config.host, dialect: config.dialectDB})

module.exports = sequelize;


// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

