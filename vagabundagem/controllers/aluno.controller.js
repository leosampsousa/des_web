const Aluno = require('../models/aluno.model');

exports.inserir = async function(req,res){
	try{
		const alunoCriado = await Aluno.create(req.body)
		return res.json(alunoCriado);
	}
	catch{
		return res.status(500).send({error : 'erro interno no servidor'});
	}
}