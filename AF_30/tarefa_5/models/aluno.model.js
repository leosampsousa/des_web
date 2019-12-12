const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AlunoSchema = new Schema({
	matricula : {type: Number, required:true},
	nome: {type: String, required:true},
	data_nascimento: {type: String, required: true},
	email: {type: String, required: true},
	DDD: {type: String, required: true},
	telefone: {type: String, required: true},
	operadora: {type: String, required: true},
	campus: {type: String, required: true},
	curso: {type: String, required: true},
});

module.exports = mongoose.model('Aluno', AlunoSchema);