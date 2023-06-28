const express = require('express');
const especialidadeModel = require('../model/especialidadeModel');



/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/especialidade/inserir' , (req,res)=>{
    
    let { cod_especialidade, nome_especialidade } = req.body;

    especialidadeModel.create(
        {
            cod_especialidade,
            nome_especialidade
            
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'ESPECIALIDADE CADASTRADA COM SUCESSO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

module.exports = router;