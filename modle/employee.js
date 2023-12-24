const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const employee = sequelize.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {tableName: 'employee', timestamps: false});

module.exports = employee;
