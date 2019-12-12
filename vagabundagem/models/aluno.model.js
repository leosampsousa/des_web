const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let alunoSchema = new Schema({
	campus:{type:String, require:true},
	curso:{type:String, require:true},
});

module.exports = mongoose.model('Aluno', alunoSchema);