/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');
const especialidade = require('./especialidadeModel');



/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE MEDICOS 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAMPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/
const medico = connection.define(
    'Tbl_medico',
    {
        
        
        nome_medico:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        email_medico:{
            type: sequelize.STRING(100),
            allowNull:false
        },
        telefone_medico:{
            type: sequelize.STRING(10),
            allowNull:false          
        },
    
        celular_medico:{
            type: sequelize.STRING(11),
            allowNull:false          
        },
        foto:{
            type: sequelize.STRING(500),
            allowNull:false  
        },
        

    }
);



especialidade.hasMany(medico);

/*
A CHAVE ESTRANGEIRA DE MEDICO (N) É ACHAVE PRIMARIA DE ESPECIALIDADE (1)
*/
medico.belongsTo(especialidade);



//medico.sync({force:true});

module.exports = medico;

