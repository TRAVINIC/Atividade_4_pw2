/*IMPORT DO PACOTE EXPRESS*/
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

/*HABILITA A APLICAÇÃO A MANIPULAR DADOS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}));

/*  CRIAÇÃO DAS ROTAS DE MEDICO */
const medicoController = require('./controller/medicoController');
app.use('/', medicoController);

/*  CRIAÇÃO DAS ROTAS DE ESPECIALIDADES */
// const especialidadeController = require('./controller/especialidadeController');
// app.use('/', especialidadeController);



// app.post('/testePOST', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP POST');
// });

/*
CRIAÇÃO DO SERVIDOR HTTP:
PARAMETROS:
1 - PORTA LÓGICA
2 - CALLBACK: 
*/

app.listen(3000, ()=>{ 
    console.log('SERVIDOR RODANDO EM - http://localhost:3000'); 
});