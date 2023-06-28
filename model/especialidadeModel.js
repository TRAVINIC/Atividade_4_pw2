/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* IMPORTAÇÃO DA MODEL DE MEDICO */
const medico = require('./medicoModel');

const especialidade = connection.define(
    'tbl_especialidade',
    {
        cod_especialidade:{
            type: sequelize.STRING(500),
            allowNull:false
        },

        nome_especialidade:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        
    }

);

/*
A CHAVE PRIMÁRIA (1) DE ESPECIALIDADE VIRA UMA CHAVE ESTRAGEIRA (N) EM MEDICO 
*/

//especialidade.sync({force:false});

module.exports = especialidade;