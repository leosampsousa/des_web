const express = require('express');
const router = express.Router();

const aluno_controller = require('../controllers/aluno.controller');

router.get('/alunos', aluno_controller.listar);

router.get('/alunos/:matricula', aluno_controller.visualizar);
router.post('/alunos', aluno_controller.inserir);

router.put('/alunos/:matricula', aluno_controller.update);

router.delete('/alunos/:matricula', aluno_controller.remover);


module.exports = router;