const express = require('express');
const router = express.Router();

const aluno_controller = require('../controllers/aluno.controller');

router.post('/alunos', aluno_controller.inserir);

module.exports = router;