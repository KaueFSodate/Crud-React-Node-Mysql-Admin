const {Sequelize} = require('sequelize');
const db = require("../DB/conexao");

const {DataTypes} = Sequelize;


const User = db.define('users',{
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    fone: DataTypes.STRING,
    nascimento: DataTypes.STRING
});

module.exports = User;

